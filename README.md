# JURAID-NE Frontend

This is a React + Vite app with a production Contact Us form powered by a Vercel serverless function (`/api/contact`).

## Local development

```bash
npm install
npm run dev
```

The Contact Us API route (`/api/contact`) runs in Vercel serverless functions, so full form testing is best on a Vercel deployment.

## Build

```bash
npm run build
npm run preview
```

## Contact form setup (Resend + Vercel)

The form sends an email through Resend from `api/contact.js`.

### 1) Create a Resend account

- Create an API key in Resend.
- Verify your sender domain (recommended for production).

### 2) Set Vercel environment variables

In Vercel Project Settings -> Environment Variables, add:

- `RESEND_API_KEY` = your Resend API key
- `CONTACT_TO_EMAIL` = the email address that should receive messages
- `CONTACT_FROM_EMAIL` = sender email (example: `noreply@yourdomain.com`)

If `CONTACT_FROM_EMAIL` is not set, it uses `onboarding@resend.dev` (best for testing only).

### 3) Deploy on Vercel

Use these values in Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

Vercel will automatically deploy static files and host `/api/contact` as a serverless function.

### 4) Troubleshooting quick checks

- If the form says message must be 10+ characters, type a longer message.
- If you get "Email service is not configured", verify Vercel environment variables.
- If Resend rejects sender email, make sure `CONTACT_FROM_EMAIL` domain is verified in Resend.
- Add values from `.env.example` to Vercel Environment Variables (do not commit real secrets).
