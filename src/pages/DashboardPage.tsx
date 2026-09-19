import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Avatar,
  Chip,
  Divider,
  Snackbar,
  Alert,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  ContentCopy,
  CheckCircle,
  Logout as LogoutIcon,
  Security,
  VerifiedUser,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyToken = async () => {
    if (!token) return;
    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = token;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/', { replace: true });
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#F8FAFC', py: { xs: 3, md: 5 } }}>
      <Container maxWidth="md">
        {/* Top Header Navigation */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: '12px',
                backgroundColor: '#111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '1.1rem',
              }}
            >
              T
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>
              Tuga&apos;s App
            </Typography>
            <Chip
              label="Authenticated"
              size="small"
              color="success"
              icon={<VerifiedUser sx={{ fontSize: '14px !important' }} />}
              sx={{ fontWeight: 600, fontSize: '0.75rem' }}
            />
          </Box>

          <Button
            variant="outlined"
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              borderRadius: 9999,
              borderColor: '#E2E8F0',
              color: '#475569',
              fontWeight: 600,
              fontSize: '0.85rem',
              '&:hover': {
                borderColor: '#CBD5E1',
                backgroundColor: '#F1F5F9',
                color: '#0F172A',
              },
            }}
          >
            Sign Out
          </Button>
        </Box>

        {/* User Profile Card */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            mb: 3,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'flex-start' },
              textAlign: { xs: 'center', sm: 'left' },
              gap: 3,
            }}
          >
            <Avatar
              src={user?.photoURL || undefined}
              alt={user?.displayName || 'User Avatar'}
              sx={{
                width: { xs: 72, sm: 84 },
                height: { xs: 72, sm: 84 },
                fontSize: '2rem',
                fontWeight: 700,
                backgroundColor: '#111827',
                border: '3px solid #EEF7F2',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
            </Avatar>

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 0.5 }}>
                {user?.displayName || 'Welcome, Authenticated User!'}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B', mb: 1.5 }}>
                {user?.email || 'No email provided'}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                }}
              >
                <Chip
                  label={`Provider: ${user?.providerId || 'Google'}`}
                  size="small"
                  sx={{
                    backgroundColor: '#EEF7F2',
                    color: '#2E7D32',
                    fontWeight: 600,
                    borderRadius: '8px',
                  }}
                />
                <Chip
                  label={`UID: ${user?.uid ? `${user.uid.slice(0, 10)}...` : 'Unknown'}`}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: '#E2E8F0',
                    color: '#64748B',
                    borderRadius: '8px',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Access Token Display Container */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 2,
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
              <Security sx={{ color: '#2E7D32' }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', fontSize: '1.05rem' }}>
                  Authenticated Access Token
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B' }}>
                  OAuth / Firebase Token obtained from successful Google sign-in
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={copied ? <CheckCircle /> : <ContentCopy />}
              onClick={handleCopyToken}
              sx={{
                borderRadius: 9999,
                backgroundColor: copied ? '#2E7D32' : '#111827',
                fontSize: '0.8125rem',
                py: 0.8,
                px: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: copied ? '#1B5E20' : '#1F2937',
                },
              }}
            >
              {copied ? 'Token Copied!' : 'Copy Token'}
            </Button>
          </Box>

          <Divider sx={{ my: 2, borderColor: '#F1F5F9' }} />

          {/* Scrollable Code Box */}
          <Box
            sx={{
              backgroundColor: '#0F172A',
              borderRadius: '16px',
              p: 2.5,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1.5,
              }}
            >
              <Typography
                sx={{
                  color: '#94A3B8',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                JWT / Access Token
              </Typography>
              <Tooltip title="Copy Token">
                <IconButton
                  size="small"
                  onClick={handleCopyToken}
                  sx={{ color: '#94A3B8', '&:hover': { color: '#FFFFFF' } }}
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>

            <Box
              sx={{
                maxHeight: 180,
                overflowY: 'auto',
                overflowX: 'auto',
                fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                fontSize: '0.8125rem',
                color: '#38BDF8',
                lineHeight: 1.6,
                wordBreak: 'break-all',
                whiteSpace: 'pre-wrap',
                pr: 1,
                '&::-webkit-scrollbar': {
                  width: '6px',
                  height: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#334155',
                  borderRadius: '4px',
                },
              }}
            >
              {token || 'No active token available'}
            </Box>
          </Box>

          <Typography variant="body2" sx={{ color: '#64748B', mt: 2, fontSize: '0.8125rem' }}>
            <strong>Note:</strong> This token securely authenticates API and Firebase service requests on behalf of the user. Never commit or expose this token in public repositories or client URLs.
          </Typography>
        </Paper>
      </Container>

      {/* Copy Notification Toast */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ borderRadius: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
        >
          Access token copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};
