# Pygmalion

**Create websites by chatting with AI**

Pygmalion is an AI-powered web application builder that allows users to create complete Next.js websites through natural language conversations. Simply describe what you want to build, and Pygmalion generates a fully functional website in a sandboxed environment with real-time preview capabilities.

## Main Description

Pygmalion leverages advanced AI agents (powered by Google's Gemini) to build production-ready Next.js applications based on user prompts. The system runs code generation and execution in isolated E2B sandboxes, ensuring security while providing users with instant previews of their generated websites. Users can create multiple projects, view their code, and interact with live previews - all managed through an intuitive chat interface.

### Key Features

- 🤖 **AI-Powered Code Generation**: Uses Google Gemini AI with Inngest Agent Kit to generate complete Next.js applications
- 💬 **Chat Interface**: Natural language conversations to describe and build websites
- 🎨 **Real-Time Preview**: See your generated websites instantly with live preview and code views
- 📁 **Project Management**: Create and manage multiple projects with organized message history
- 🔒 **Secure Sandboxing**: Code execution happens in isolated E2B sandboxes
- 💳 **Usage Tracking**: Rate limiting and credit system for API usage management
- 🎯 **Template Library**: Pre-built templates for common website types (Netflix clone, Admin dashboard, Kanban board, etc.)

## What I Learned

Building Pygmalion was an excellent learning experience that covered:

- **Next.js 15 App Router**: Modern React Server Components and client components architecture
- **tRPC**: Type-safe API layer with end-to-end type safety
- **Prisma ORM**: Database schema design and migrations with PostgreSQL
- **Inngest**: Background job processing and AI agent orchestration
- **Clerk Authentication**: User authentication and authorization
- **E2B Sandboxes**: Secure code execution environments
- **Rate Limiting**: Implementation with `rate-limiter-flexible` for API usage control
- **React Query**: Efficient data fetching and caching
- **Radix UI & Shadcn**: Accessible component library and design system
- **Tailwind CSS**: Utility-first styling with custom themes
- **GSAP Animations**: Smooth animations and transitions
- **TypeScript**: Type-safe development throughout the stack
- **Error Boundaries**: Graceful error handling in React applications
- **Resizable Panels**: Complex UI layouts with interactive resizing

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **pnpm** (recommended) or npm/yarn
- **PostgreSQL** database (local or remote)
- **Git**

Additionally, you'll need accounts for:

- **Clerk** (for authentication): [https://clerk.com](https://clerk.com)
- **Inngest** (for background jobs): [https://inngest.com](https://inngest.com)
- **E2B** (for sandboxes): [https://e2b.dev](https://e2b.dev)
- **Google Cloud** (for Gemini API): [https://cloud.google.com](https://cloud.google.com)

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:vasile-draguta/pygmalion.git
cd pygmalion
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/pygmalion?schema=public"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"

# Google Gemini AI
GEMINI_API_KEY="your-gemini-api-key"

# E2B Sandbox
E2B_API_KEY="your-e2b-api-key"
```

### 4. Set Up the Database

Run Prisma migrations to create the database schema:

```bash
pnpm prisma migrate dev
```

Generate the Prisma client:

```bash
pnpm prisma generate
```

### 5. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
pygmalion/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/             # Database migrations
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── (home)/            # Home route group
│   │   ├── projects/          # Project pages
│   │   └── api/               # API routes
│   ├── components/            # Reusable UI components
│   │   └── ui/               # Shadcn UI components
│   ├── modules/              # Feature modules
│   │   ├── home/             # Home page features
│   │   ├── projects/         # Project management
│   │   ├── messages/         # Chat/messages
│   │   └── usage/            # Usage tracking
│   ├── inngest/              # Background job functions
│   ├── lib/                  # Utilities and helpers
│   ├── trpc/                 # tRPC router configuration
│   └── generated/            # Generated Prisma client
├── sandbox-templates/        # E2B sandbox templates
└── public/                   # Static assets
```

## Tech Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: Radix UI + Shadcn UI
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **API**: tRPC
- **Background Jobs**: Inngest
- **AI**: Google Gemini (via Inngest Agent Kit)
- **Sandboxes**: E2B Code Interpreter
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **Animations**: GSAP
- **Rate Limiting**: rate-limiter-flexible

## Environment Variables

### Required Variables

- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_APP_URL` - Your application URL (e.g., `http://localhost:3000`)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key from your Clerk dashboard
- `CLERK_SECRET_KEY` - Clerk secret key from your Clerk dashboard
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` - Sign-in page URL (e.g., `/sign-in`)
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` - Redirect URL after sign-in (e.g., `/`)
- `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` - Redirect URL after sign-up (e.g., `/`)
- `GEMINI_API_KEY` - Google Gemini API key from Google Cloud Console
- `E2B_API_KEY` - E2B API key for sandbox execution from [e2b.dev](https://e2b.dev)

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm inngest:dev` - Start Inngest dev server (for local development)

## Running Inngest

Inngest handles background job processing for code generation. You have two options:

### Option 1: Inngest Dev Server (Recommended for Development)

1. **Install Inngest CLI** (if not already installed):
   ```bash
   npm install -g inngest
   ```

2. **Start your Next.js development server**:
   ```bash
   pnpm dev
   ```

3. **In a separate terminal, start the Inngest dev server**:
   ```bash
   npx inngest-cli@latest dev
   ```
   
   Or add to your `package.json` scripts:
   ```json
   "inngest:dev": "inngest-cli dev"
   ```
   
   Then run:
   ```bash
   pnpm inngest:dev
   ```

4. The Inngest dev server will:
   - Connect to your Next.js app at `http://localhost:3000/api/inngest`
   - Provide a dashboard at `http://localhost:8288` to monitor functions
   - Automatically sync your functions and handle events

### Option 2: Inngest Cloud (Production)

For production, deploy your Next.js app and configure Inngest Cloud:

1. Sign up at [inngest.com](https://www.inngest.com)
2. Create an app and get your signing key
3. Add to your `.env`:
   ```env
   INNGEST_SIGNING_KEY="your-signing-key"
   INNGEST_EVENT_KEY="your-event-key"
   ```
4. Deploy your Next.js app - Inngest will automatically discover your functions

### Environment Variables for Inngest

For local development with the dev server, no additional environment variables are needed. The dev server handles everything automatically.

For production/cloud:
- `INNGEST_SIGNING_KEY` - Signing key from Inngest dashboard
- `INNGEST_EVENT_KEY` - Event key from Inngest dashboard (optional)

## Database Schema

The application uses the following main models:

- **Project**: User projects with metadata
- **Message**: Chat messages between user and AI
- **Fragment**: Generated code fragments with file contents
- **Usage**: Rate limiting and usage tracking

## How It Works

1. **User Input**: User describes what they want to build via the chat interface
2. **Message Processing**: Message is saved and triggers an Inngest background job
3. **AI Agent**: Inngest Agent Kit with Gemini AI generates code using tools:
   - `terminal` - Run npm commands
   - `createOrUpdateFiles` - Create/modify files
   - `readFiles` - Read existing files
4. **Sandbox Execution**: Code runs in isolated E2B sandbox
5. **Preview Generation**: Generated website is previewed via sandbox URL
6. **Code Storage**: Files and metadata are stored in database
7. **User Interface**: User can view preview, code, and continue conversation

## Features Overview

### Project Management

- Create new projects with custom names
- View all projects in a list
- Delete projects
- Navigate to project details

### Chat Interface

- Real-time message display
- Conversation history
- Loading states during generation
- Error handling

### Code Viewer

- File explorer with tree view
- Syntax highlighting
- Copy to clipboard
- Resizable panels

### Usage Tracking

- Credit-based system
- Rate limiting per user
- Usage status display
- Premium tier support
