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
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_ELIGIBILITY_TEMPLATE_ID=your_eligibility_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=contactus@overseasgateway.com
VITE_WHATSAPP_NUMBER=9949998351
```

Configure both EmailJS templates to send submissions to `contactus@overseasgateway.com`.

- Contact template fields: `form_type`, `name`, `email`, `phone`, `destination`, `preferred_time`, `message`, `to_email`.
- Eligibility template fields: `form_type`, `name`, `email`, `phone`, `study_level`, `interested_countries`, `interested_course`, `intake_year`, `main_priority`, `current_qualification`, `academic_score`, `english_test_status`, `work_experience`, `scholarship_importance`, `city_state`, `counselling_mode`, `to_email`.

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
