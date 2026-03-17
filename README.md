# Scalable Web App Folder Structure Boilerplate – React + Express

### Feature based structure
---

## Get Started

### 1. Clone the project

```
git clone https://github.com/naveencodecloud/scalable-web-app-folder-structure-boilerplate.git
```

### 2. Install Dependencies
```
npm install
```
- To install dependencies, run `npm install` inside /client, /server, and the project root folder.

## Project Folder Structure

```
scalable-saas-folder-structure-boilerplate/
│
├── client/                                    # React + TypeScript (Vite) — customer-facing app
│   ├── src/
│   │   ├── app/                                 # App-level config: context providers and routes
│   │   │   ├── context/                         # React Context providers (global state)
│   │   │   │   ├── AuthContext.tsx              # Auth state: user object, token, login(), logout(), isAuthenticated
│   │   │   │   └── ThemeContext.tsx             # Theme state: current theme, toggleTheme()
│   │   │   └── routes.tsx                       # All app routes defined in one place using React Router
│   │   │
│   │   ├── assets/                              # Static assets: logo, images, fonts
│   │   │   └── logo.svg
│   │   │
│   │   ├── components/                          # Global/shared reusable UI components (not feature-specific)
│   │   │   ├── form/                            # Form input components
│   │   │   │   ├── Input.tsx                    # Text input with label and validation display
│   │   │   │   └── SelectInput.tsx              # Dropdown select input
│   │   │   ├── sections/                        # Reusable page section blocks
│   │   │   │   └── Hero.tsx                     # Hero/banner section
│   │   │   └── ui/                              # Generic UI primitives (no business logic)
│   │   │       ├── Button.tsx
│   │   │       ├── ButtonGroup.tsx
│   │   │       ├── Dropdown.tsx
│   │   │       └── Modal.tsx
│   │   │
│   │   ├── data/                                # Static/sample data and environment config
│   │   │   ├── env.ts                           # Typed access to VITE_* env vars — centralized in one place
│   │   │   └── sampleProductsData.json          # Sample product data for development/testing — remove in production
│   │   │
│   │   ├── features/                            # One folder per feature — components, API calls, and logic
│   │   │   ├── authentication/                  # Auth feature
│   │   │   │   ├── components/
│   │   │   │   │   ├── LoginForm.tsx
│   │   │   │   │   └── RegisterForm.tsx
│   │   │   │   └── authApi.ts                   # Auth API calls (login, register, logout)
│   │   │   ├── user/                            # User profile feature
│   │   │   │   └── userApi.ts                   # User API calls (getMe, updateProfile, updatePassword)
│   │   │   └── EXAMPLE: products/               # Product browsing feature
│   │   │       ├── components/
│   │   │       │   ├── ProductDetails.tsx       # Single product detail view — images, description, price, add-to-cart
│   │   │       │   ├── ProductFilters.tsx       # Filters sidebar/panel: category, price range, sort
│   │   │       │   └── ProductsGrid.tsx         # Products grid
│   │   │       ├── productApi.ts                # Fetch all products (summary data only)
│   │   │       └── singleProductApi.ts          # Fetch single product (full detail)
│   │   │
│   │   ├── hooks/                               # Custom React hooks shared across features
│   │   │   └── useAuth.ts                       # Wraps AuthContext — use this instead of importing context directly
│   │   │
│   │   ├── layouts/                             # Page layout components
│   │   │   ├── Container.tsx                    # Max-width centered wrapper
│   │   │   ├── Dashboard.tsx                    # Logged-in dashboard layout
│   │   │   ├── Footer.tsx                       # Footer
│   │   │   ├── MainLayout.tsx                   # Root layout: Navbar + <Outlet> + Footer
│   │   │   ├── Navbar.tsx                       # Header
│   │   │   └── Section.tsx                      # Section block with consistent padding
│   │   │
│   │   ├── lib/                                 # Third-party library wrappers
│   │   │   └── apiClient.ts                     # Fetch wrapper using the Facade pattern
│   │   │
│   │   ├── pages/                               # Route-level page components
│   │   │   ├── About.tsx
│   │   │   ├── ContactUs.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── MyAccount.tsx
│   │   │   ├── NotFound.tsx                     # 404 page
│   │   │   └── Register.tsx
│   │   │
│   │   ├── styles/                              # Global styles and CSS custom properties
│   │   │   ├── animations.css                   # Keyframe animations
│   │   │   ├── globals.css                      # Base/reset styles
│   │   │   ├── themes.css                       # Light and dark theme token definitions
│   │   │   └── variables.css                    # CSS custom properties (colors, spacing, typography)
│   │   │
│   │   ├── utils/                               # Pure helper functions (no React)
│   │   │   ├── types/                           # Shared TypeScript type definitions
│   │   │   │   ├── product.d.ts                 # Product type shared across features
│   │   │   │   └── user.d.ts                    # User type shared across frontend, admin, and backend
│   │   │   ├── constants.ts                     # App-wide string/number constants
│   │   │   ├── formatPrice.ts                   # Currency and price formatting
│   │   │   └── validateEmail.ts                 # Email format validation
│   │   │
│   │   ├── App.tsx                              # Root component — wraps providers and router
│   │   ├── index.css                            # CSS entry point (imports styles/)
│   │   └── main.tsx                             # Vite entry point — mounts <App /> to DOM
│   │
│   ├── public/                                  # Static files served as-is (favicon, robots.txt)
│   ├── .env                                     # Frontend environment variables (VITE_*)
│   ├── index.html                               # HTML shell — Vite injects bundle here
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── server/                                     # Node.js + Express + TypeScript REST API
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.ts                            # DB connection config
│   │   │   └── env.ts                           # env variables
│   │   │
│   │   ├── middlewares/                         # Express middleware functions
│   │   │   ├── auth.middlewares.ts              # JWT verification
│   │   │   ├── error.middleware.ts              # Global error handler
│   │   │   └── validate.middleware.ts           # Request body validator
│   │   │
│   │   ├── modules/
│   │   │   └── auth/
│   │   │       ├── auth.controller.ts           # register, login, refresh, logout
│   │   │       ├── auth.model.ts                # User schema
│   │   │       ├── auth.routes.ts               # /auth/* endpoints
│   │   │       ├── auth.service.ts              # Business logic: hashing, JWT signing, etc.
│   │   │       └── auth.validators.ts           # Zod schemas for valid auth data
│   │   │
│   │   ├── utils/                               # Pure helper functions
│   │   │   └── cookie.ts                        # httpOnly cookie helpers
│   │   └── server.ts                            # HTTP server entry point — binds port, starts listening
│   │
│   ├── .env                                     # Backend environment variables
│   └── package.json
│
└── README.md                                    # Project overview and architecture reference

```
