# Clerk Authentication Setup Guide

This project uses [Clerk](https://clerk.com) for authentication. Follow these steps to get your dashboard working.

## Quick Setup

### 1. Create a Clerk Account

1. Go to [https://clerk.com](https://clerk.com) and sign up for a free account
2. Create a new application in the Clerk dashboard
3. Choose "Email + Password" as your authentication method (or add more options as needed)

### 2. Get Your API Keys

1. In your Clerk dashboard, navigate to **API Keys** section
2. You'll see two keys:
   - **Publishable Key** (starts with `pk_test_...`)
   - **Secret Key** (starts with `sk_test_...`)

### 3. Configure Environment Variables

Create a `.env.local` file in your project root (or update your existing `.env` file):

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# Clerk Routes (already configured)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

**Important:** Replace `your_publishable_key_here` and `your_secret_key_here` with your actual Clerk keys from step 2.

### 4. Build and Run

Once you've added your Clerk keys:

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Features Enabled by Clerk

- Protected `/dashboard` route - only accessible after sign-in
- Sign-in page at `/sign-in`
- Sign-up page at `/sign-up`
- Secure API routes for file uploads
- User authentication state management

## Testing Authentication

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000`
3. Click "Sign In" or "Start Free Trial"
4. Create a test account with your email
5. You'll be redirected to the dashboard after sign-in

## Customizing Clerk

You can customize the Clerk components appearance in:
- `/app/sign-in/[[...sign-in]]/page.tsx`
- `/app/sign-up/[[...sign-up]]/page.tsx`

See [Clerk documentation](https://clerk.com/docs) for more customization options.

## Troubleshooting

### Build Fails with "Missing publishableKey"

Make sure you've added your Clerk keys to the `.env` or `.env.local` file.

### Pages Show "Unauthorized"

Clear your browser cache and cookies, then try signing in again.

### Need to Reset Password

Clerk provides built-in password reset functionality. Users can click "Forgot password?" on the sign-in page.

## Production Deployment

When deploying to production:

1. Get your **Production** API keys from Clerk (they'll start with `pk_live_...` and `sk_live_...`)
2. Add these keys to your hosting platform's environment variables
3. Never commit your `.env` or `.env.local` files to version control

For deployment to Vercel, Netlify, or other platforms, add the environment variables in their dashboard settings.
