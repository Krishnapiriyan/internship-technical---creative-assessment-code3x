import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Link,
  Alert,
  Snackbar,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { SocialButtons } from './SocialButtons';

interface LoginFormProps {
  onGoogleSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onGoogleSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validation States
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [formSuccessMessage, setFormSuccessMessage] = useState<string | null>(null);

  const validateEmail = (value: string): boolean => {
    if (!value.trim()) {
      setEmailError('Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validatePassword = (value: string): boolean => {
    if (!value) {
      setPasswordError('Please enter your password');
      return false;
    }
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      setFormSuccessMessage(
        'Validation passed! Use the Google button below to authenticate with Firebase and obtain an access token.'
      );
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        width: '100%',
        maxWidth: 420,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Title and Subtitle */}
      <Box sx={{ mb: { xs: 3.5, sm: 4 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2rem', sm: '2.4rem', md: '2.6rem' },
            color: '#111827',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            mb: 1.5,
          }}
        >
          Welcome back!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#6B7280',
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            lineHeight: 1.5,
            maxWidth: 360,
          }}
        >
          Simplify your workflow and boost your productivity with{' '}
          <Box component="span" sx={{ fontWeight: 600, color: '#374151' }}>
            Tuga&apos;s App
          </Box>
          . Get started for free.
        </Typography>
      </Box>

      {/* Input Fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.2 }}>
        {/* Username/Email Input */}
        <Box>
          <TextField
            fullWidth
            id="login-email"
            name="email"
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) validateEmail(e.target.value);
            }}
            onBlur={() => validateEmail(email)}
            error={Boolean(emailError)}
            helperText={emailError}
            aria-label="Email or Username"
            slotProps={{
              formHelperText: {
                sx: { ml: 2, mt: 0.5, fontSize: '0.75rem' },
              },
            }}
          />
        </Box>

        {/* Password Input */}
        <Box>
          <TextField
            fullWidth
            id="login-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) validatePassword(e.target.value);
            }}
            onBlur={() => validatePassword(password)}
            error={Boolean(passwordError)}
            helperText={passwordError}
            aria-label="Password"
            slotProps={{
              formHelperText: {
                sx: { ml: 2, mt: 0.5, fontSize: '0.75rem' },
              },
              input: {
                endAdornment: (
                  <InputAdornment position="end" sx={{ mr: 0.5 }}>
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                      sx={{ color: '#9CA3AF' }}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {/* Forgot Password Link */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -0.5 }}>
          <Link
            href="#forgot-password"
            underline="none"
            onClick={(e) => e.preventDefault()}
            sx={{
              fontSize: '0.8125rem',
              color: '#4B5563',
              fontWeight: 500,
              '&:hover': {
                color: '#111827',
                textDecoration: 'underline',
              },
            }}
          >
            Forgot Password?
          </Link>
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            height: 50,
            borderRadius: 9999,
            backgroundColor: '#000000',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            fontWeight: 600,
            mt: 0.5,
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: '#1F2937',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          Login
        </Button>
      </Box>

      {/* Horizontal Divider */}
      <Divider
        sx={{
          my: 3.5,
          color: '#9CA3AF',
          fontSize: '0.8125rem',
          '&::before, &::after': {
            borderColor: '#E5E7EB',
          },
        }}
      >
        or continue with
      </Divider>

      {/* Social Login Buttons */}
      <SocialButtons onSuccess={onGoogleSuccess} />

      {/* Register Footer */}
      <Box sx={{ textAlign: 'center', mt: { xs: 4, sm: 5 } }}>
        <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '0.875rem' }}>
          Not a member?{' '}
          <Link
            href="#register"
            underline="none"
            onClick={(e) => e.preventDefault()}
            sx={{
              color: '#2E7D32',
              fontWeight: 600,
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
                color: '#1B5E20',
              },
            }}
          >
            Register now
          </Link>
        </Typography>
      </Box>

      {/* Success Notification for Form Validation */}
      <Snackbar
        open={Boolean(formSuccessMessage)}
        autoHideDuration={6000}
        onClose={() => setFormSuccessMessage(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setFormSuccessMessage(null)}
          severity="info"
          variant="filled"
          sx={{ width: '100%', borderRadius: 3 }}
        >
          {formSuccessMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
