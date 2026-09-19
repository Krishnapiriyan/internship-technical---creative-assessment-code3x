import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  type User as FirebaseUser,
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '../firebase/config';
import type { AuthContextType, AuthUser } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_STORAGE_KEY = 'internship_assessment_token';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(() => {
    return sessionStorage.getItem(TOKEN_STORAGE_KEY);
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser: FirebaseUser | null) => {
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          providerId: currentUser.providerData[0]?.providerId || 'google.com',
        });

        // If we don't already have an OAuth accessToken stored, get the Firebase ID token
        const storedToken = sessionStorage.getItem(TOKEN_STORAGE_KEY);
        if (!storedToken) {
          try {
            const idToken = await currentUser.getIdToken();
            setToken(idToken);
            sessionStorage.setItem(TOKEN_STORAGE_KEY, idToken);
          } catch {
            // Keep existing or null
          }
        }
      } else {
        setUser(null);
        setToken(null);
        sessionStorage.removeItem(TOKEN_STORAGE_KEY);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setError(null);
    setLoading(true);

    if (!isFirebaseConfigured()) {
      setError(
        'Firebase is not yet configured. Please add your real Firebase API keys in your .env file to use Google Authentication.'
      );
      setLoading(false);
      return;
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      // Obtain access token from Google OAuth credential, fallback to Firebase ID Token
      let obtainedToken = credential?.accessToken || null;
      if (!obtainedToken) {
        obtainedToken = await result.user.getIdToken();
      }

      setToken(obtainedToken);
      if (obtainedToken) {
        sessionStorage.setItem(TOKEN_STORAGE_KEY, obtainedToken);
      }

      setUser({
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        providerId: result.user.providerData[0]?.providerId || 'google.com',
      });
    } catch (err: unknown) {
      const firebaseError = err as { code?: string; message?: string };
      
      switch (firebaseError.code) {
        case 'auth/popup-closed-by-user':
          setError('Sign-in was cancelled: the Google popup was closed before completing.');
          break;
        case 'auth/cancelled-popup-request':
          setError('A previous sign-in request was cancelled.');
          break;
        case 'auth/popup-blocked':
          setError('Popup was blocked by your browser. Please allow popups for this site.');
          break;
        case 'auth/network-request-failed':
          setError('Network error: please check your internet connection and try again.');
          break;
        case 'auth/operation-not-allowed':
          setError(
            'Google Sign-in is not enabled in Firebase Console. Please enable Google under Authentication > Sign-in method.'
          );
          break;
        case 'auth/invalid-api-key':
        case 'auth/api-key-not-valid':
          setError('Invalid Firebase API key in .env file. Please check your credentials.');
          break;
        default:
          setError(
            firebaseError.message || 'An unexpected error occurred during Google authentication. Please try again.'
          );
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setToken(null);
      sessionStorage.removeItem(TOKEN_STORAGE_KEY);
    } catch (err: unknown) {
      const e = err as Error;
      setError(e.message || 'Failed to sign out. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        loginWithGoogle,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// oxlint-disable-next-line react/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
