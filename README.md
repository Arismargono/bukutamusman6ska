# Buku Tamu Digital - SMA Negeri 6 Surakarta

A digital guest book application for SMA Negeri 6 Surakarta built with React, Vite, and Express.

## Features

- Guest registration with photo capture
- Real-time guest list display
- Check-in/check-out functionality
- Statistics dashboard
- Report generation
- Responsive design for all devices

## Tech Stack

- **Frontend**: React 18, Vite
- **Backend**: Express.js, SQLite
- **Deployment**: Vercel

## Deployment to Vercel

This application is configured for deployment to Vercel with the following setup:

1. Frontend (React + Vite) is built and served statically
2. Backend (Express API) runs as serverless functions
3. SQLite database is stored in the backend directory
4. Photos are stored in the backend/photos directory

### Vercel Configuration

- `vercel.json` defines the build and routing configuration
- `api/[[...path]].js` serves as the entry point for backend API
- Static files are served from the `dist` directory after build

## Local Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

1. Install dependencies for both frontend and backend:
   ```bash
   cd backend && npm install
   cd ../buku-tamu && npm install
   ```

2. Start the backend server:
   ```bash
   cd backend && npm start
   ```

3. Start the frontend development server:
   ```bash
   cd buku-tamu && npm run dev
   ```

4. Open http://localhost:3000 in your browser

## Environment Variables

The application uses the following environment variables:

- `PORT`: Port for the backend server (default: 5001 for local development)

## Database

The application uses SQLite for data storage. The database file `bukutamu.db` is automatically created in the backend directory.

## Deployment Status

✅ **Ready for Deployment**: The application has been configured and tested for deployment to Vercel.
✅ **404 Error Fixed**: The routing configuration has been updated to resolve the NOT_FOUND error.
✅ **API Working**: All API endpoints are functioning correctly.
✅ **Frontend Served**: The React frontend is properly served by the Express backend.
✅ **Static Files**: CSS, JavaScript, and other assets are properly configured.
✅ **Serverless Functions**: API routes and health checks are properly configured.

## Common Deployment Issues and Solutions

### 404 NOT_FOUND Error
**Solution**: Updated vercel.json routing configuration to properly handle static files and API routes.

### NO_RESPONSE_FROM_FUNCTION Error
**Solution**: Enhanced serverless function error handling in api/[[...path]].js.

### BODY_NOT_A_STRING_FROM_FUNCTION Error
**Solution**: Added proper promise handling in serverless functions.

## License

MIT