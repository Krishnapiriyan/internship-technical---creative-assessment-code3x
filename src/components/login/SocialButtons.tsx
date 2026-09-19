import React from 'react';
import { Box, IconButton, Tooltip, CircularProgress } from '@mui/material';
import { GoogleIcon, AppleIcon, FacebookIcon } from './SocialIcons';
import { useAuth } from '../../context/AuthContext';

interface SocialButtonsProps {
  onSuccess?: () => void;
}

export const SocialButtons: React.FC<SocialButtonsProps> = ({ onSuccess }) => {
  const { loginWithGoogle, loading } = useAuth();

  const handleGoogleClick = async () => {
    if (loading) return;
    try {
      await loginWithGoogle();
      if (onSuccess) onSuccess();
    } catch {
      // Error handled in AuthContext
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 2, sm: 2.5 },
        my: 1,
      }}
    >
      <Tooltip title="Continue with Google" arrow>
        <span>
          <IconButton
            onClick={handleGoogleClick}
            disabled={loading}
            aria-label="Continue with Google"
            sx={{
              width: 50,
              height: 50,
              backgroundColor: '#000000',
              color: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: '#262626',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
              '&.Mui-disabled': {
                backgroundColor: '#404040',
                color: '#A3A3A3',
              },
            }}
          >
            {loading ? (
              <CircularProgress size={22} sx={{ color: '#FFFFFF' }} />
            ) : (
              <GoogleIcon sx={{ fontSize: 20 }} />
            )}
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip title="Continue with Apple (UI Reference)" arrow>
        <IconButton
          aria-label="Continue with Apple"
          sx={{
            width: 50,
            height: 50,
            backgroundColor: '#000000',
            color: '#FFFFFF',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              backgroundColor: '#262626',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          <AppleIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Continue with Facebook (UI Reference)" arrow>
        <IconButton
          aria-label="Continue with Facebook"
          sx={{
            width: 50,
            height: 50,
            backgroundColor: '#000000',
            color: '#FFFFFF',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              backgroundColor: '#262626',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          <FacebookIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
