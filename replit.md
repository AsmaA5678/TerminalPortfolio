# Cybersecurity Portfolio Application

## Overview

This is an interactive cybersecurity portfolio application for Imane BAMOUH, presented as a terminal-based interface. The application simulates a command-line environment where users can explore Imane's professional profile, skills, projects, and experience through various terminal commands. The application features a modern cybersecurity-themed design with neon colors, matrix-style animations, and an immersive user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom cybersecurity theme variables
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: React's built-in state management with hooks

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server-side bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definition in `/shared/schema.ts`
- **Database**: PostgreSQL (configured for Neon Database)
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Frontend Components
1. **WelcomeScreen**: Initial landing page with animated matrix background
2. **Terminal**: Interactive command-line interface with typing effects
3. **ProjectModal**: Modal component for displaying detailed project information
4. **CVModal**: Modal for CV viewing and download functionality

### Backend Components
1. **Storage Interface**: Abstracted storage layer with in-memory implementation
2. **Route Handler**: Express.js route registration system
3. **Vite Integration**: Development server with HMR support

### Shared Components
1. **Schema Definitions**: Zod-validated database schemas
2. **Type Definitions**: TypeScript interfaces for data models

## Data Flow

1. **User Interaction**: Users interact with the terminal interface by typing commands
2. **Command Processing**: Commands are parsed and executed locally in the frontend
3. **Data Retrieval**: Static data (projects, skills, experience) is stored in TypeScript files
4. **Modal Display**: Detailed information is displayed in overlay modals
5. **Database Operations**: User data (if implemented) flows through the storage interface

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React ecosystem with TypeScript support
- **Component Library**: Radix UI for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for processing
- **Animations**: CSS animations with custom keyframes
- **State Management**: TanStack Query for server state management

### Backend Dependencies
- **Database**: PostgreSQL with Neon Database serverless connection
- **ORM**: Drizzle ORM with Zod schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development Tools**: tsx, esbuild, and Replit-specific plugins

### Development Dependencies
- **Build Tools**: Vite with React plugin and runtime error handling
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implied by project structure)

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with Vite dev server on port 5000
- **Production**: Built static files served by Express.js
- **Database**: Environment-based DATABASE_URL configuration
- **Hosting**: Configured for Replit deployment with autoscale target

### Build Process
1. **Frontend Build**: Vite builds React application to `/dist/public`
2. **Backend Build**: esbuild bundles server code to `/dist/index.js`
3. **Asset Handling**: Static assets served from built directory
4. **Database Migration**: Drizzle Kit handles schema migrations

### Security Considerations
- **Input Validation**: Zod schemas for data validation
- **Session Security**: PostgreSQL-based session storage
- **Environment Variables**: Secure configuration management
- **CORS**: Configured for appropriate cross-origin requests

## Changelog

```
Changelog:
- June 14, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```