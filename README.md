# Internship Login Assessment

A modern, production-ready React application built with TypeScript, Material UI (MUI), and Firebase Authentication. This application replicates the "Tuga's App" reference login design with pixel-conscious attention to typography, rounded capsule borders, responsive grid layouts, form validation, and Google OAuth login displaying the authenticated user's access token on a protected dashboard.

---

## Overview

This project was developed as part of a technical internship assessment. The primary goal is to reproduce a modern, two-column split authentication screen on desktop (with an adaptive layout on tablet and mobile), implement client-side form validation, integrate Google Authentication via Firebase, securely extract the authentication access token, and provide a protected dashboard interface.

---

## Features

- **Pixel-Conscious Reference Recreation**:
  - Recreates the "Tuga's App" visual design with custom Poppins typography, rounded pill-shaped inputs, solid black action buttons, and muted accents.
  - Custom vector artwork illustrating a mindful productivity character with floating user avatars, thought loops, and a "Canva Design" task badge with an 84% progress ring.
  - Carousel-style pagination indicators.
- **Form Validation & Interactivity**:
  - Email format validation with user-friendly error messages.
  - Password required validation and minimum 6-character length constraint.
  - Show / Hide password visibility toggle.
  - Subtle micro-interactions, hover states, and accessible focus outlines.
- **Firebase Google Authentication**:
  - Google OAuth Sign-In using Firebase's `signInWithPopup`.
  - Accessible social button row (Google, Apple, Facebook).
  - Loading spinner states and prevention of duplicate auth requests.
  - User-friendly error notifications (popup closed, network errors, blocked popups) via MUI Alerts and Snackbars.
- **Protected Dashboard**:
  - Client-side route guarding (`/dashboard` redirects unauthenticated users to `/`).
  - Displays user profile (Google display name, email, avatar photo, and provider details).
  - Formatted, scrollable code box displaying the authenticated JWT / Access Token.
  - One-click "Copy Token" button with clipboard integration and toast feedback.
  - Session termination via Firebase `signOut`.
- **Responsive Layout**:
  - Desktop (>1024px): 45% form / 55% illustration two-column layout.
  - Tablet (768px - 1024px): Proportional scaling and balanced spacing.
  - Mobile (<768px): Prioritized single-column form with zero horizontal overflow.
- **Firebase Hosting Ready**:
  - Configured Single Page Application (SPA) URL rewrites to `/index.html`.

---

## Technologies

- **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Component Library**: [Material UI (MUI v6)](https://mui.com/)
- **Styling Engine**: [Emotion](https://emotion.sh/) (`@emotion/react`, `@emotion/styled`)
- **Icons**: [`@mui/icons-material`](https://mui.com/material-ui/material-icons/) & Custom SVG Icons
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth) (`GoogleAuthProvider`)
- **Hosting**: [Firebase Hosting](https://firebase.google.com/docs/hosting)
- **Code Quality**: [Oxlint](https://oxc.rs/)

---

## Project Structure

```
internship-login-assessment/
├── .env.example                       # Environment variables template
├── .firebaserc                        # Firebase project alias
├── .gitignore                         # Git ignore configuration
├── firebase.json                      # Firebase Hosting & SPA rewrites configuration
├── index.html                         # HTML entry with Poppins font preconnect
├── package.json                       # Dependencies and build scripts
├── tsconfig.json                      # TypeScript configuration
├── vite.config.ts                     # Vite build configuration
├── src/
│   ├── assets/                        # Static assets
│   ├── components/
│   │   ├── common/
│   │   │   └── ProtectedRoute.tsx     # Route protection wrapper for /dashboard
│   │   ├── illustration/
│   │   │   └── ProductivityIllustration.tsx # Custom vector art & task badge
│   │   └── login/
│   │       ├── LoginForm.tsx          # Form inputs, validation, and layout
│   │       ├── SocialButtons.tsx      # Google OAuth and social icon buttons
│   │       └── SocialIcons.tsx        # Vector SVGs for Google, Apple, Facebook
│   ├── context/
│   │   └── AuthContext.tsx            # Firebase Auth state provider and useAuth hook
│   ├── firebase/
│   │   └── config.ts                  # Firebase SDK initialization and auth exports
│   ├── pages/
│   │   ├── LoginPage.tsx              # Responsive split login page
│   │   └── DashboardPage.tsx          # Authenticated user view and token display
│   ├── routes/
│   │   └── AppRoutes.tsx              # React Router route definitions
│   ├── theme/
│   │   └── theme.ts                   # Custom MUI theme (colors, typography, shapes)
│   ├── types/
│   │   └── auth.ts                    # TypeScript interfaces for auth and users
│   ├── App.css                        # App stylesheet
│   ├── App.tsx                        # Application root provider tree
│   ├── index.css                      # Global baseline stylesheet
│   └── main.tsx                       # React DOM entry point
└── README.md
```

---

## Local Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (or `pnpm` / `yarn`)
- A Firebase project with Google Authentication enabled

### 2. Clone the Repository
```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd internship-login-assessment
```

### 3. Install Dependencies
```bash
npm install
```

---

## Environment Variables

Copy the provided `.env.example` file to create your local `.env`:

```bash
cp .env.example .env
```

Populate the following variables with your Firebase Web App configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> **Security Note:** The `.env` file is excluded from Git via `.gitignore`. Never commit live credentials or secret keys to version control.

---

## Firebase Configuration

1. Visit the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Navigate to **Build > Authentication** and click **Get Started**.
3. Under the **Sign-in method** tab, select **Google**, enable it, specify your project support email, and save.
4. Go to **Project Settings** (gear icon) > **General** tab.
5. Under **Your apps**, click the Web (`</>`) icon, enter an app nickname, and click **Register app**.
6. Copy the values from the `firebaseConfig` snippet into your `.env` file.
7. Under **Authentication > Settings > Authorized domains**, ensure `localhost` is listed. Once deployed, add your Firebase Hosting domain if it is not added automatically.

---

## Google Authentication Flow

1. On the Login page, click the **Google** circular button.
2. A Google OAuth modal opens via `signInWithPopup`.
3. Upon authentication, Firebase issues an authenticated User instance and an OAuth credential.
4. The application captures the user's `accessToken` (or Firebase ID token), updates the `AuthContext`, and navigates to `/dashboard`.
5. If the user closes the popup or experiences network issues, a user-friendly alert appears without exposing internal system details.

---

## Running Locally

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## Build & Quality Checks

Run the TypeScript type checker and production bundle build:

```bash
npm run build
```

Run code quality linting:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

---

## Firebase Deployment

### 1. Install Firebase CLI
If not already installed globally:
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Associate Your Firebase Project
Update `.firebaserc` with your Firebase project ID, or run:
```bash
firebase use --add
```

### 4. Build and Deploy
```bash
npm run build
firebase deploy --only hosting
```

Your live site will be accessible at:
`https://assessment-code3x.web.app`

---

## Screenshots

| Desktop View | Mobile View | Dashboard View |
| :---: | :---: | :---: |
| *(Recreates reference login design)* | *(Clean stacked responsive form)* | *(Displays token & profile)* |

---

## Live Demo

- **Hosted URL**: *https://assessment-code3x.web.app*

---

## GitHub Repository

- **Repository**: *https://github.com/Krishnapiriyan/internship-technical---creative-assessment-code3x.git*
