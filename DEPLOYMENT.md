# Google Cloud Run Deployment Guide

## Prerequisites
- Google Cloud project with Cloud Run enabled
- Docker installed locally (optional, for testing)
- gcloud CLI installed and authenticated

## Step 1: Set Environment Variable in Google Cloud Run

When deploying to Cloud Run, you need to set the `GEMINI_API_KEY` environment variable.

### Option A: Using gcloud CLI

```bash
gcloud run deploy seocompanyisrael \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=AIzaSyA3-yVoP4KV62wvazqMuIEoLz8_qqDS8aE \
  --port 8080
```

### Option B: Using Google Cloud Console

1. Go to [Google Cloud Run Console](https://console.cloud.google.com/run)
2. Select your service (or create a new one)
3. Click "Edit & Deploy New Revision"
4. Expand "Container, Variables & Secrets, Connections, Security"
5. Under "Environment Variables", click "Add Variable"
6. Set:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: `AIzaSyA3-yVoP4KV62wvazqMuIEoLz8_qqDS8aE`
7. Click "Deploy"

## Step 2: Build and Deploy

### Using Cloud Build (Recommended)

```bash
# Build the container
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/seocompanyisrael

# Deploy to Cloud Run
gcloud run deploy seocompanyisrael \
  --image gcr.io/YOUR_PROJECT_ID/seocompanyisrael \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=AIzaSyA3-yVoP4KV62wvazqMuIEoLz8_qqDS8aE \
  --port 8080
```

### Using Source Deploy (Easier)

```bash
gcloud run deploy seocompanyisrael \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=AIzaSyA3-yVoP4KV62wvazqMuIEoLz8_qqDS8aE \
  --port 8080
```

## Step 3: Verify Deployment

After deployment, Cloud Run will provide a URL like:
```
https://seocompanyisrael-xxxxx-uc.a.run.app
```

Test the site by:
1. Opening the URL in your browser
2. Filling out the audit form
3. Verifying that the AI-generated strategy appears

## Updating Environment Variables

To update the API key without redeploying:

```bash
gcloud run services update seocompanyisrael \
  --set-env-vars GEMINI_API_KEY=NEW_API_KEY_HERE \
  --region us-central1
```

## Troubleshooting

### Site Not Loading
- Check that the build completed successfully
- Verify the PORT is set to 8080 in the Dockerfile
- Check Cloud Run logs: `gcloud run logs read --service seocompanyisrael`

### API Key Not Working
- Verify the environment variable is set correctly
- Check if the API key has the necessary permissions in Google Cloud Console
- Make sure the Generative Language API is enabled in your project

### Build Failures
- Ensure all dependencies are in package.json
- Check that the Dockerfile is using the correct Node version
- Verify .dockerignore is not excluding necessary files

## Local Development

To run locally with the API key:

```bash
# Install dependencies
npm install

# Start dev server (reads from .env file)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Security Notes

- ✅ `.env` file is in `.gitignore` and won't be committed
- ✅ API key is injected at build time via environment variables
- ✅ For production, consider using Google Secret Manager instead of environment variables
- ⚠️ Never commit API keys to version control
- ⚠️ Rotate API keys regularly for security

## Using Google Secret Manager (Advanced)

For better security, store the API key in Secret Manager:

```bash
# Create secret
echo -n "AIzaSyA3-yVoP4KV62wvazqMuIEoLz8_qqDS8aE" | \
  gcloud secrets create gemini-api-key --data-file=-

# Deploy with secret
gcloud run deploy seocompanyisrael \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-secrets GEMINI_API_KEY=gemini-api-key:latest \
  --port 8080
```
