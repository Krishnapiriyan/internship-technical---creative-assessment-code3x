import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h3: {
      fontWeight: 700,
      color: '#111827',
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 700,
      color: '#111827',
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
      color: '#111827',
    },
    body1: {
      color: '#374151',
      fontSize: '0.9375rem',
      lineHeight: 1.5,
    },
    body2: {
      color: '#6B7280',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#111827',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
    },
    divider: '#E5E7EB',
  },
  shape: {
    borderRadius: 28,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          padding: '12px 24px',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
          },
        },
        contained: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#1F2937',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          backgroundColor: '#FFFFFF',
          transition: 'all 0.2s ease-in-out',
          '& fieldset': {
            borderColor: '#E5E7EB',
            borderWidth: 1.5,
          },
          '&:hover fieldset': {
            borderColor: '#9CA3AF !important',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#111827 !important',
            borderWidth: '1.5px !important',
          },
        },
        input: {
          padding: '13px 20px',
          fontSize: '0.9375rem',
          '&::placeholder': {
            color: '#9CA3AF',
            opacity: 1,
          },
        },
      },
    },
  },
});