# Ritual Club - Development Framework Documentation

## 🏗️ Project Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: React Context + Custom Hooks
- **Backend**: Supabase (Database + Authentication + Storage)
- **Form Handling**: React Hook Form + Zod validation
- **Notifications**: Sonner toasts
- **Build Tool**: Vite with hot module replacement

### 📁 Project Structure
```
src/
├── components/
│   ├── auth/               # Authentication components
│   │   ├── AuthDialog.tsx  # Login/Signup modal
│   │   ├── LoginForm.tsx   # Login form with validation
│   │   └── SignupForm.tsx  # Registration form
│   ├── ui/                 # shadcn/ui components (reusable)
│   ├── AuthProvider.tsx    # Authentication context provider
│   ├── ProtectedRoute.tsx  # Route protection wrapper
│   └── [other components]  # Feature-specific components
├── pages/
│   ├── Index.tsx          # Landing page
│   ├── Dashboard.tsx      # User dashboard
│   ├── AdminPanel.tsx     # Admin interface
│   └── [other pages]
├── hooks/
│   └── useAuth.ts         # Authentication hook & context
├── integrations/
│   └── supabase/          # Supabase client & types
└── lib/
    └── utils.ts           # Utility functions
```

## 🔐 Authentication System

### Implementation Details
- **Provider Pattern**: Uses React Context for global auth state
- **Hook-based**: `useAuth()` hook provides auth methods and state
- **Protected Routes**: `ProtectedRoute` component handles access control
- **Role-based Access**: Supports 'user' and 'admin' roles
- **Persistent Sessions**: Uses localStorage for session persistence

### Authentication Flow
1. User submits credentials via `LoginForm`
2. `useAuth.signIn()` calls Supabase auth
3. Session established and user profile fetched
4. Context updates trigger UI re-renders
5. Protected routes check authentication status

### Sample User Accounts (Password: user123)
- **Admin**: admin@ritualclub.com (Sarah Johnson)
- **Users**: 
  - mike.chen@email.com (Mike Chen)
  - emma.rodriguez@email.com (Emma Rodriguez)  
  - david.kim@email.com (David Kim)
  - lisa.thompson@email.com (Lisa Thompson)

## 🗄️ Database Schema

### Tables
- **auth.users**: Supabase managed user authentication
- **public.profiles**: Extended user information with custom fields

### Profile Schema
```typescript
type Profile = {
  id: string              // UUID, matches auth.users.id
  email: string           // User's email
  name: string            // Full name
  phone: string           // Contact number
  current_work: string    // Current occupation
  interests: string       // Personal interests
  hobbies: string         # Hobbies and activities
  concerns: string        // Areas of concern/improvement
  expectations: string    // What they expect from the platform
  how_did_you_know: string // How they discovered the platform
  role: 'user' | 'admin'  // Access level
  created_at: string      // Account creation timestamp
  updated_at: string      // Last update timestamp
}
```

## 🎨 Design System

### Styling Approach
- **Semantic Tokens**: All colors use CSS custom properties
- **Theme Support**: Light/dark mode compatible
- **Component Variants**: shadcn/ui components with custom variants
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Color System (HSL-based)
- Primary colors defined in `index.css`
- Semantic naming convention (primary, secondary, accent, etc.)
- Dark mode variants automatically handled

### Component Guidelines
- Use existing shadcn/ui components when possible
- Create custom variants rather than inline styles
- Follow the established design tokens
- Maintain consistency across the application

## 🔧 Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Code Quality
- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Code linting and formatting rules
- **Form Validation**: Zod schemas for runtime validation
- **Error Boundaries**: Graceful error handling

### Testing Approach
- Manual testing in development environment
- Form validation testing with various inputs
- Authentication flow testing
- Role-based access verification

## 🚀 Deployment

### Lovable Cloud Integration
- Automatic builds on code changes
- Environment variable management
- Supabase integration configured
- Custom domain support available

### Environment Configuration
- Supabase URL and keys configured in client
- No additional environment variables required
- All secrets managed through Lovable Cloud

## 📋 Feature Implementation Notes

### Current Features
- ✅ User authentication (login/signup)
- ✅ Protected routes with role-based access
- ✅ User profile management
- ✅ Admin panel access control
- ✅ Responsive design with dark mode
- ✅ Form validation and error handling

### Development Patterns
- **Component Composition**: Small, focused components
- **Hook-based Logic**: Custom hooks for reusable logic
- **Context for Global State**: Authentication and user data
- **TypeScript First**: Strong typing throughout
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔍 Debugging & Monitoring

### Available Tools
- React Developer Tools
- Supabase Dashboard for database monitoring
- Browser console for client-side debugging
- Network tab for API request inspection

### Common Issues & Solutions
- **Auth State**: Check if user context is properly initialized
- **Route Protection**: Verify ProtectedRoute wrapper usage
- **Form Validation**: Ensure Zod schemas match form structure
- **Styling Issues**: Check for proper semantic token usage

## 📚 Learning Resources

### Key Technologies
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

### Best Practices
- Keep components small and focused
- Use TypeScript for better developer experience
- Implement proper error boundaries
- Follow the established design system
- Write self-documenting code with clear naming
- Test authentication flows thoroughly
- Maintain consistent code formatting

---

*Last updated: $(date)*
*Framework: React + TypeScript + Supabase + Tailwind CSS*