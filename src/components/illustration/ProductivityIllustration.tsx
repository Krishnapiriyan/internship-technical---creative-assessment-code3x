import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export const ProductivityIllustration: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 540,
        height: '100%',
        minHeight: { xs: 440, md: 580 },
        backgroundColor: '#EEF7F2',
        borderRadius: { xs: '24px', md: '36px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '24px 16px', sm: '36px 28px', md: '44px 32px' },
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Upper Area with Characters and Floating Graphics */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: { xs: 280, md: 360 },
        }}
      >
        {/* Floating Avatar 1: Guy on Top Left */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '6%', md: '8%' },
            left: { xs: '4%', md: '12%' },
            width: { xs: 48, md: 56 },
            height: { xs: 48, md: 56 },
            borderRadius: '50%',
            backgroundColor: '#D1E7D8',
            border: '2px solid #111827',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="48" fill="#D1E7D8" />
            {/* Hair */}
            <path d="M30 40 Q50 15 70 40 Q75 30 65 18 Q50 12 35 20 Z" fill="#111827" />
            <path d="M42 12 Q50 5 58 12 Q52 8 42 12" fill="#111827" stroke="#111827" strokeWidth="2" />
            {/* Face */}
            <circle cx="50" cy="55" r="28" fill="#FFF2E8" />
            {/* Eyes */}
            <circle cx="43" cy="52" r="3" fill="#111827" />
            <circle cx="57" cy="52" r="3" fill="#111827" />
            {/* Big friendly smile */}
            <path d="M42 63 Q50 73 58 63" stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="39" cy="60" r="3" fill="#FFB4A2" opacity="0.6" />
            <circle cx="61" cy="60" r="3" fill="#FFB4A2" opacity="0.6" />
            {/* Collar */}
            <path d="M35 83 L50 78 L65 83" stroke="#111827" strokeWidth="2" fill="none" />
          </svg>
        </Box>

        {/* Floating Avatar 2: Girl on Right */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '38%', md: '42%' },
            right: { xs: '2%', md: '6%' },
            width: { xs: 44, md: 52 },
            height: { xs: 44, md: 52 },
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '2px solid #111827',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
            {/* Hair */}
            <path d="M25 45 C20 20 80 20 75 45 C80 60 78 70 75 75 C70 50 65 30 50 30 C35 30 30 50 25 75 Z" fill="#111827" />
            {/* Face */}
            <circle cx="50" cy="52" r="22" fill="#FFF2E8" />
            {/* Eyes */}
            <circle cx="43" cy="50" r="3" fill="#111827" />
            <circle cx="57" cy="50" r="3" fill="#111827" />
            {/* Surprised / happy mouth */}
            <ellipse cx="50" cy="62" rx="4" ry="5" fill="#111827" />
            {/* Cheeks */}
            <circle cx="40" cy="58" r="2.5" fill="#FFB4A2" opacity="0.6" />
            <circle cx="60" cy="58" r="2.5" fill="#FFB4A2" opacity="0.6" />
          </svg>
        </Box>

        {/* Center Main Meditating Figure Vector */}
        <Box
          sx={{
            width: { xs: 260, sm: 300, md: 340 },
            height: { xs: 260, sm: 300, md: 340 },
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg viewBox="0 0 400 400" width="100%" height="100%" fill="none">
            {/* Background Looping Green Clouds / Zen Trails */}
            <path
              d="M130 180 C80 140 100 80 160 90 C180 60 250 60 270 100 C320 80 340 140 310 180 C330 200 320 250 280 260"
              stroke="#A3D4B5"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="1 0"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M140 140 C160 110 210 110 230 140"
              stroke="#A3D4B5"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />

            {/* Hair Back */}
            <path
              d="M165 145 C150 100 250 100 235 145 C245 160 240 190 232 205 C220 180 215 140 200 140 C185 140 180 180 168 205 C160 190 155 160 165 145 Z"
              fill="#111827"
            />

            {/* Head / Face */}
            <path
              d="M180 145 C180 130 220 130 220 145 C220 168 214 182 200 184 C186 182 180 168 180 145 Z"
              fill="#FFF2E8"
              stroke="#111827"
              strokeWidth="3"
            />
            {/* Gentle Closed Eyes */}
            <path d="M188 152 Q193 156 197 152" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M203 152 Q207 156 212 152" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
            {/* Peaceful Smile */}
            <path d="M196 166 Q200 171 204 166" stroke="#111827" strokeWidth="2" strokeLinecap="round" />

            {/* Neck */}
            <path d="M195 183 L195 198 L205 198 L205 183" fill="#FFF2E8" stroke="#111827" strokeWidth="2.5" />

            {/* Sweater Body (Mint Green) */}
            <path
              d="M172 200 C155 204 140 235 130 270 C145 272 165 260 178 245 L174 300 C188 303 212 303 226 300 L222 245 C235 260 255 272 270 270 C260 235 245 204 228 200 Z"
              fill="#A7DCB9"
              stroke="#111827"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* White Heart on Sweater */}
            <path
              d="M200 248 C200 248 184 235 184 222 C184 214 191 208 200 216 C209 208 216 214 216 222 C216 235 200 248 200 248 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Arms in Yoga Mudra */}
            {/* Left Arm & Hand */}
            <path
              d="M150 235 C130 250 120 280 135 295 C145 305 158 290 162 280"
              stroke="#111827"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Left Hand Fingers Touching */}
            <circle cx="127" cy="275" r="4.5" fill="#FFF2E8" stroke="#111827" strokeWidth="2.5" />
            <path d="M125 272 C120 262 126 255 130 264" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />

            {/* Right Arm & Hand */}
            <path
              d="M250 235 C270 250 280 280 265 295 C255 305 242 290 238 280"
              stroke="#111827"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Right Hand Fingers Touching */}
            <circle cx="273" cy="275" r="4.5" fill="#FFF2E8" stroke="#111827" strokeWidth="2.5" />
            <path d="M275 272 C280 262 274 255 270 264" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />

            {/* Crossed Legs in Yoga Pose */}
            <path
              d="M165 300 C140 305 125 325 150 345 C175 365 225 365 250 345 C275 325 260 305 235 300 Z"
              fill="#FAF9F6"
              stroke="#111827"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Trouser Fold Lines */}
            <path d="M175 303 C180 325 192 345 200 355" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M225 303 C220 325 208 345 200 355" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
            {/* Bare Feet */}
            <path
              d="M152 348 C145 352 142 360 148 368 C158 375 168 368 174 358"
              fill="#FFF2E8"
              stroke="#111827"
              strokeWidth="2.5"
            />
            <path
              d="M248 348 C255 352 258 360 252 368 C242 375 232 368 226 358"
              fill="#FFF2E8"
              stroke="#111827"
              strokeWidth="2.5"
            />
          </svg>
        </Box>

        {/* Floating Task Badge Card: "Canva Design / 10 Task" (Bottom-Left) */}
        <Paper
          elevation={0}
          sx={{
            position: 'absolute',
            bottom: { xs: '-4%', md: '2%' },
            left: { xs: '2%', md: '6%' },
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #111827',
            borderRadius: '20px',
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            width: { xs: 150, md: 170 },
            zIndex: 3,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827', lineHeight: 1.2 }}>
                Canva Design
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', mt: 0.3 }}>
                10 Task
              </Typography>
            </Box>

            {/* 84% Progress Ring */}
            <Box sx={{ position: 'relative', width: 34, height: 34 }}>
              <svg viewBox="0 0 36 36" width="34" height="34">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="3.5"
                  strokeDasharray="84, 100"
                  strokeLinecap="round"
                />
              </svg>
              <Typography
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  color: '#111827',
                }}
              >
                84%
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              border: '1px solid #111827',
              borderRadius: '12px',
              padding: '2px 8px',
            }}
          >
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#111827' }}>
              Design
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Carousel Dots Indicators */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mt: 3,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: '#CBD5E1',
          }}
        />
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: '#CBD5E1',
          }}
        />
        <Box
          sx={{
            width: 20,
            height: 7,
            borderRadius: 4,
            backgroundColor: '#111827',
          }}
        />
      </Box>

      {/* Bottom Tagline Typography */}
      <Box sx={{ textAlign: 'center', mt: 1, mb: 1, px: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1.15rem', sm: '1.3rem', md: '1.45rem' },
            color: '#111827',
            lineHeight: 1.35,
          }}
        >
          Make your work easier and organized
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1.15rem', sm: '1.3rem', md: '1.45rem' },
            color: '#111827',
            lineHeight: 1.35,
          }}
        >
          with <Box component="span" sx={{ fontWeight: 800 }}>Tuga&apos;s App</Box>
        </Typography>
      </Box>
    </Box>
  );
};
