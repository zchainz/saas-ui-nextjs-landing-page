# FIRE Clip Machine

A modern, conversion-focused SaaS platform for FIRE Clip Machine - the specialized AI repurposer for personal finance and FIRE podcasters.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Authentication:** Clerk
- **Database:** Supabase
- **Styling:** Tailwind CSS v3.4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **File Upload:** react-dropzone
- **Notifications:** sonner
- **Icons:** Lucide React
- **Theme:** next-themes for dark mode support
- **TypeScript:** Full type safety

## Color Palette

- **Primary:** Deep Blue (#1E3A8A)
- **Accent:** Green (#10B981)
- **Neutrals:** Grays and white
- **Dark mode compatible**

## Features

### Landing Page Components

1. **Navbar** - Sticky navigation with dark mode toggle
2. **Hero Section** - High-impact hero with gradient background
3. **Features Section** - 4-card grid highlighting key features
4. **Demo/How It Works** - 4-step process visualization
5. **Pricing Section** - 3-tier pricing comparison
6. **Footer** - Clean footer with links

### Authentication

- **Clerk Integration** - Secure email/password authentication
- **Protected Routes** - Middleware-based route protection
- **Sign-in/Sign-up Pages** - Beautiful, branded auth pages

### Dashboard

- **Protected Dashboard** - Accessible only after authentication
- **Upload Section** - Drag-and-drop file upload or YouTube URL input
  - Supports MP3, WAV, MP4, M4A files
  - YouTube URL processing
  - Real-time upload progress
- **Recent Episodes** - Table view of uploaded episodes with status tracking
- **Sidebar Navigation** - Clean navigation with user profile
- **Responsive Design** - Mobile-first, works on all devices

## Getting Started

### Prerequisites

Before running the application, you need to set up Clerk authentication. See [CLERK_SETUP.md](./CLERK_SETUP.md) for detailed instructions.

### Quick Start

1. **Install Dependencies**

```bash
npm install
```

2. **Configure Environment Variables**

Copy `.env.local.example` to `.env.local` and add your Clerk API keys:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

3. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

4. **Build for Production**

```bash
npm run build
```

5. **Start Production Server**

```bash
npm start
```

## SEO Configuration

The landing page includes comprehensive SEO metadata optimized for FIRE and personal finance podcast creators.

## Design Principles

- **Clean & Professional:** No bloat, fast-loading, conversion-focused
- **Mobile-First:** Responsive design with appropriate breakpoints
- **Dark Mode:** Full dark mode support with smooth transitions
- **Accessibility:** Built on Radix UI primitives for ARIA compliance
- **Type Safety:** Full TypeScript coverage

## Project Structure

```
fire-clip-machine/
├── app/
│   ├── api/
│   │   └── upload/          # Upload API endpoint
│   ├── dashboard/           # Protected dashboard pages
│   ├── sign-in/            # Clerk sign-in pages
│   ├── sign-up/            # Clerk sign-up pages
│   └── page.tsx            # Landing page
├── components/
│   ├── dashboard/          # Dashboard-specific components
│   │   ├── sidebar.tsx     # Navigation sidebar
│   │   ├── upload-section.tsx
│   │   └── recent-episodes.tsx
│   ├── ui/                 # Reusable UI components
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── features.tsx
│   └── ...
├── lib/
│   └── utils.ts            # Utility functions
├── middleware.ts           # Route protection
└── CLERK_SETUP.md         # Authentication setup guide
```

## API Routes

### POST /api/upload

Upload endpoint for podcast episodes. Accepts:
- File uploads (MP3, WAV, MP4, M4A)
- YouTube URLs

Returns episode ID for tracking processing status.

## Next Steps

To complete the MVP, implement:

1. Actual file upload to Supabase Storage
2. Video/audio transcription integration
3. AI clip generation
4. Episode detail pages
5. Clip export functionality
6. Social media scheduling

## License

All rights reserved © 2026 FIRE Clip Machine
