import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Alert, Snackbar } from '@mui/material';
import { LoginForm } from '../components/login/LoginForm';
import { ProductivityIllustration } from '../components/illustration/ProductivityIllustration';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const { user, error, clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, sm: 5, md: 4 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 5, sm: 6, md: 6, lg: 8 },
            width: '100%',
          }}
        >
          {/* Left Column: Form Area (~45%) */}
          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
            }}
          >
            <LoginForm onGoogleSuccess={() => navigate('/dashboard')} />
          </Box>

          {/* Right Column: Illustration Panel (~55%) */}
          <Box
            sx={{
              width: { xs: '100%', md: '55%' },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
            }}
          >
            <ProductivityIllustration />
          </Box>
        </Box>
      </Container>

      {/* Global Auth Error Snackbar */}
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={7000}
        onClose={clearError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={clearError}
          severity="error"
          variant="filled"
          sx={{
            width: '100%',
            borderRadius: 3,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};
