# Overseas Gateway Website

React/Vite multi-page website for Overseas Gateway, using React Router, EmailJS for form submissions, and WhatsApp redirects for primary lead capture.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example` and add:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=contactus@overseasgateway.com
VITE_WHATSAPP_NUMBER=91949998351
```

3. Run locally:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Deploy To Vercel

- Import this folder into Vercel.
- Set the same environment variables in Vercel project settings.
- Deploy, then add the published domain in Vercel under Project Settings > Domains.

## Routes

- `/`
- `/about`
- `/services`
- `/destinations`
- `/blog`
- `/blog/:slug`
- `/eligibility`
- `/contact`
