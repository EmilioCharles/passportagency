
1. The Core (Frontend & Framework)

Framework: Next.js 15 (App Router)

Why: We need React Server Components (RSC) to render the heavy lifting on the server. This ensures the site loads instantly even on slow 3G connections (common for travelers).

Language: TypeScript (Strict Mode)

Why: Zero tolerance for "undefined is not a function" errors. Passport applications require absolute data strictness.

Styling Engine: Tailwind CSS v4

The 0.1% Upgrade: We are ditching the tailwind.config.js JavaScript file. In v4, we configure the theme directly in CSS variables (@theme). It uses the new Rust-based engine for sub-millisecond build times.

Component Library: Shadcn/ui (v2)

Why: It provides accessible, unstyled components (built on Radix UI) that we style with Tailwind. It gives us a "Government-grade" accessible foundation but looks fully custom.

2. The User Experience (Animation & Interaction)

Motion: Framer Motion 11

Usage: Smooth transitions between steps in the "Passport Wizard." We want the form to feel like a conversation, not an interrogation.

Icons: Lucide React

Why: Clean, lightweight, consistent SVG icons that load instantly.

3. The Backend & Data (Serverless Architecture)

Database: PostgreSQL (hosted on Neon.tech)

Why: We need a relational database to link Users -> Appointments -> Passport Status. Neon offers "Serverless Postgres" which scales to zero when not in use (saves money) and scales up instantly during high traffic.

ORM (Object Relational Mapper): Drizzle ORM

Why: It is lighter and faster than Prisma. It creates SQL queries that run at bare-metal speeds, essential for quick status lookups.

Backend Logic: Next.js Server Actions

The Strategy: We will not build a separate API Express server. We will use Server Actions to mutate data directly from the frontend components. This is secure and reduces latency by 50%.

4. Forms & Validation (Critical for Passports)

Form Management: React Hook Form

Why: It prevents re-renders. When a user types their name, the whole page shouldn't flicker.

Schema Validation: Zod

Why: We define the "shape" of a valid passport application (e.g., "Passport Number must be 9 alphanumeric characters"). Zod validates this on the client (instant feedback) AND the server (security).

File Uploads: UploadThing

Why: The easiest way to securely upload ID photos and scanned documents to an S3 bucket without managing AWS keys manually.

5. Integration Services (The Business Tools)

CMS (Content): Sanity.io

Why: You need to update "Visa Requirements" or "Travel Warnings" instantly. Sanity gives you a dashboard that looks like a simplified Word document.

Scheduling: Cal.com Platform (Atom)

The 0.1% Move: Instead of building a calendar from scratch, we integrate Cal.com's infrastructure via API to handle time zones for your international consultations (e.g., converting "2 PM Kampala time" to the client's time in London).

Authentication: Clerk

Why: It handles 2-Factor Authentication (Email/SMS) out of the box. Essential for protecting client passport data.

6. Internationalization (i18n)

Library: next-intl

Why: Complete support for Server Components. We will support English and Luganda initially, with architecture ready for French/Swahili.

Implementation Plan: Tailwind v4 Configuration

Since Tailwind v4 is a paradigm shift, here is how we will set up your global.css to match the Nshara branding immediately:

code
CSS
download
content_copy
expand_less
@import "tailwindcss";

@theme {
  /* Nshara Brand Colors derived from the flyer */
  --color-nshara-yellow: #FFD500; 
  --color-nshara-black: #1A1A1A;
  --color-nshara-gray: #F3F4F6;
  
  /* Modern Typography */
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  
  /* Animation speeds */
  --animate-fade-in: fade-in 0.5s ease-in-out;
}

/* Custom Utility for the "Passport Card" look */
@utility card-shadow {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
The "Secret Sauce" 0.1% Features

React Email (Resend):
We will code the transactional emails (e.g., "Your Passport is Ready") using React. This ensures the emails look perfect in Outlook, Gmail, and Yahoo, maintaining the professional brand image.

OpenGraph Dynamic Images (Next.js OG):
When someone shares your link on WhatsApp (your primary channel), we will dynamically generate a preview image that says "Start your [Visa Type] Application" instead of a generic logo.

Edge Middleware:
We will use Middleware to detect the user's country (GeoIP). If they access the site from outside Uganda, we instantly swap the "Visit Office" button for a "Book Zoom Call" button before the page even finishes loading.

This stack is not just "modern"; it is industrial-grade, designed to handle sensitive data while providing a consumer experience as smooth as Uber.