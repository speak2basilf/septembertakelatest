# CliniGlobal Healthcare Training Platform

## Overview

CliniGlobal is a comprehensive healthcare training platform built with modern web technologies, offering specialized courses in clinical research, medical coding, bioinformatics, and other healthcare domains. The platform features a full-stack architecture with React frontend, Express backend, and PostgreSQL database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.
Banner design preference: Blue background without background images (updated 2025-01-21).
Contact preferences: WhatsApp contact preferred over traditional chatbot, phone number +917093794447 (updated 2025-01-21).
Student testimonial preference: Use authentic Indian student photos provided by user (updated 2025-01-21).
Accreditations section: Light blue color palette, professional layout above Industry Training Programs (updated 2025-01-22).

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens and animations
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: React Query (@tanstack/react-query) for server state
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router for client-side navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with `/api` prefix
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot module replacement via Vite middleware integration

### Database Architecture
- **Database**: PostgreSQL with Drizzle ORM
- **Provider**: Neon serverless PostgreSQL (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Type Safety**: Fully typed database queries with Drizzle and Zod

## Key Components

### Course Management System
- Comprehensive course catalog with detailed information
- Interactive course pages with syllabi, testimonials, and enrollment
- Multi-modal contact forms and enrollment system
- Career pathway and outcome tracking

### User Interface Components
- Responsive design with mobile-first approach
- Interactive testimonial sliders and carousels
- Animated hero sections with healthcare imagery
- Contact modals and chatbot integration
- Glowing effects and smooth animations

### Content Management
- Blog system with categorization and search
- Learning centers with location-based information
- Accreditation and certification displays
- Placement tracking and company partnerships

### Communication Systems
- Multi-channel contact forms (general, callback, enrollment)
- "Drop us a Query" widget replacing traditional chatbot
- WhatsApp integration with +917093794447 for instant contact
- Email integration via external webhook services
- Phone and location-based contact methods

## Data Flow

### User Journey
1. Users land on homepage with hero section and course overview
2. Course exploration through dedicated course pages
3. Enrollment process via contact modals with form validation
4. Data submission to external webhook for processing
5. Follow-up communication through various channels

### Content Delivery
- Static assets served via Vite in development
- Dynamic content rendered server-side for SEO
- API endpoints handle form submissions and data processing
- Real-time updates through React Query caching

## External Dependencies

### UI and Styling
- Radix UI components for accessible UI primitives
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Custom fonts (Poppins) via Google Fonts

### Data and State Management
- React Query for server state synchronization
- React Hook Form for form management
- Zod for schema validation
- Date-fns for date manipulation

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- ESLint and Prettier for code quality
- Drizzle Kit for database management

### External Services
- Neon PostgreSQL for database hosting
- External webhook services for form processing
- Image hosting via Pexels and Unsplash APIs
- Email services for communication

## Deployment Strategy

### Development Environment
- Local development with Vite dev server
- Hot module replacement for React components
- Automatic TypeScript compilation
- Database migrations via Drizzle Kit

### Production Build
- Vite builds optimized React application
- ESBuild bundles Node.js server code
- Static assets served from `/dist/public`
- Environment-based configuration

### Database Management
- Schema definitions in `shared/schema.ts`
- Migrations stored in `./migrations` directory
- Connection pooling via Neon serverless driver
- Environment variable configuration for database URL

### Architecture Decisions

**Problem**: Need for type-safe database interactions
**Solution**: Drizzle ORM with TypeScript integration
**Benefits**: Full type safety, excellent developer experience, minimal runtime overhead

**Problem**: Complex UI components with accessibility needs
**Solution**: Radix UI + shadcn/ui component system
**Benefits**: Accessibility built-in, consistent design system, customizable themes

**Problem**: Server-side rendering and client-side interactivity
**Solution**: Vite middleware integration with Express
**Benefits**: Fast development, optimized builds, seamless SSR/CSR transition

**Problem**: Form validation and state management
**Solution**: React Hook Form + Zod validation
**Benefits**: Minimal re-renders, type-safe validation, excellent UX