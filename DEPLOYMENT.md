# Deployment Guide for Buku Tamu Digital

## Deploying to Vercel

This application is configured for deployment to Vercel. Follow these steps to deploy:

### Prerequisites

1. Create a [Vercel account](https://vercel.com/signup)
2. Install the Vercel CLI: `npm install -g vercel`

### Deployment Steps

1. **Connect to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy the project**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Set the project directory to the root of this repository
   - Vercel will automatically detect the framework settings
   - Confirm the deployment settings

### Configuration Details

The deployment is configured with:

- **Build Command**: Vercel automatically builds the project
- **Output Directory**: `dist` (for frontend assets)
- **Development Command**: `vite` (for local development)
- **Install Command**: `npm install` (runs automatically)

### Environment Variables

No special environment variables are required for basic deployment. The application uses:
- `PORT`: Automatically set by Vercel (default: 3000)

### Custom Domain (Optional)

To use a custom domain:

1. Go to your Vercel dashboard
2. Select your project
3. Navigate to Settings > Domains
4. Add your custom domain
5. Follow the DNS configuration instructions

### Redeployment

After making changes to the code:

1. Commit your changes to Git
2. Push to your repository
3. Vercel will automatically redeploy

Or manually redeploy:
```bash
vercel --prod
```

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Ensure all dependencies are properly listed in package.json
   - Check that the build process completes successfully locally

2. **API Routes Not Working**:
   - Verify the vercel.json routes configuration
   - Ensure the api/[[...path]].js file exports the Express app correctly

3. **Static Files Not Loading**:
   - Check that files are placed in the correct directories
   - Verify the routing in vercel.json

4. **404 Errors**:
   - Check that the catch-all route is properly configured in vercel.json
   - Ensure the server.js file handles all frontend routes correctly

5. **NO_RESPONSE_FROM_FUNCTION Errors**:
   - Check the serverless function implementation in api/[[...path]].js
   - Ensure proper error handling and promise resolution

6. **BODY_NOT_A_STRING_FROM_FUNCTION Errors**:
   - Verify that the serverless function properly handles request/response objects
   - Check for any async/await issues in the function implementation

### Logs and Monitoring

View deployment logs in the Vercel dashboard or using:
```bash
vercel logs [deployment-url]
```

## Architecture

The deployed application consists of:

1. **Frontend**: React application built with Vite, served statically
2. **Backend**: Express API running as serverless functions
3. **Database**: SQLite stored in the backend directory
4. **Assets**: Photos stored in backend/photos directory

## Limitations

1. **SQLite Database**: Since Vercel serverless functions are ephemeral, database changes may not persist between deployments. For production use, consider migrating to a persistent database solution.

2. **File Storage**: Photos are stored locally in the backend/photos directory. For production use, consider using a cloud storage service like AWS S3 or Vercel Blob.

3. **Scalability**: This setup is suitable for small to medium traffic. For high-traffic applications, consider using a more scalable database and storage solution.

## Testing Deployment Locally

To test the Vercel deployment configuration locally:

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel dev`

This will simulate the Vercel environment locally.

## Current Deployment Status

✅ **All Files Present**: Database, photos directory, and frontend build are properly configured
✅ **API Working**: Health check and all guest management endpoints are functional
✅ **Frontend Served**: React application is properly served by the Express backend
✅ **Vercel Configuration**: Routing and serverless functions are correctly configured
✅ **Error Handling**: Serverless functions have proper error handling and promise resolution
✅ **Static Files**: CSS, JavaScript, and other assets are properly configured

The application is now ready for deployment to Vercel with all known issues resolved.