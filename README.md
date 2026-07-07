# Smart Bharat – AI-Powered Civic Companion

An Indian government civic-tech themed portal built to empower citizens by simplifying access to welfare schemes, local grievance registration, multilingual support, and cultural education. 

This application is designed as a high-fidelity client-only React single-page application built on top of **Vite** and **React**, styled exclusively with modern responsive **Vanilla CSS** (employing CSS custom properties for Light/Dark themes).

---

## Technical Stack

- **Core Framework**: React 19 (JavaScript)
- **Build System**: Vite 8
- **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Backdrop Filters, GPU-Accelerated translate3d animations)
- **Testing**: Vitest + React Testing Library + JSDOM
- **Code Linter**: Oxlint

---

## Directory Structure

```
smart-bharat/
├── public/                 # Static assets
├── src/
│   ├── assets/             # SVGs and images
│   ├── components/         # React views & navigation
│   │   ├── Sidebar.jsx      # Navigation, Simulated Google login, 22 languages list
│   │   ├── HomePage.jsx     # Hero section, Tricolor separator, drifting landmark backdrop
│   │   ├── BharatChat.jsx   # AI assistant screen, typing simulator, Swadesh mascot
│   │   ├── SchemeMatcher.jsx# 5-step form, eligibility checking logic
│   │   ├── CivicReporter.jsx# Grievance inputs, file validator, complaint printer, mailto drafter
│   │   └── CultureHub.jsx   # State selector, tourist list, text-to-speech speaker
│   ├── data/               # Static mock databases
│   │   ├── schemes.js       # 18+ national/state welfare schemes
│   │   ├── chatbotKb.js     # Common Q&A intent bank
│   │   ├── statesCulture.js # 36 Indian States/UTs cultural details & phrase maps
│   │   └── i18n.js          # EN & HI translations map
│   ├── utils/              # Security and helper methods
│   │   └── security.js      # XSS sanitizers, file validators
│   ├── tests/              # Vitest suite
│   │   └── app.test.jsx     # 7 logical unit tests
│   ├── App.css             # Boilerplate overrides
│   ├── App.jsx             # Main router and user-keyed state sync manager
│   ├── index.css           # Custom property variables, global resets, animation keyframes
│   ├── main.jsx            # React root mount
│   └── setupTests.js       # Vitest setup configuration file
├── vite.config.js          # Vite config & test context setups
└── package.json            # Node script maps & dependencies
```

---

## Getting Started Locally

Ensure you have [Node.js](https://nodejs.org/) installed. Run the following commands in your shell:

```bash
# 1. Install dependencies (including testing tools)
npm install

# 2. Run unit tests to confirm logic integrity
npm run test

# 3. Spin up the local development server
npm run dev

# 4. Compile the production bundle
npm run build
```

---

## Core Features & Hackathon Criteria Mapping

### 🔒 Security & Data Protection
- **Input Sanitization**: User text fields are parsed through `sanitizeText` to strip script injection elements and HTML templates before rendering. React escapes DOM outputs by default, but this adds a dual-layer defence.
- **Client-Side File Validator**: File uploads in the Grievance Portal are locked to safe MIME image types and restricted to a `5MB` size limit to avoid memory leaks.
- **OAuth Safety**: Incorporates zero hardcoded credentials/secrets. A placeholder structure is prepared for Google Identity Services.

### ⚙️ Performance & Efficiency
- **Component Lazy-Loading**: Views are lazy-loaded with `React.lazy` and structured in a `<Suspense>` container to reduce first-contentful-paint footprint.
- **Memoized Computing**: Expensive filter arrays (scheme matching rules, translations indexing, vocabulary lookups) are wrapped in React `useMemo` and `useCallback` to bypass unnecessary render cycles.
- **GPU-Accelerated Backdrops**: Background drift overlays use CSS `translate3d` (forcing GPU layer rendering) rather than structural box-margins.

### ♿ Accessibility (A11y)
- **Semantic Outlines**: Employs `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, and `<section>` partitions.
- **Screen Reader Hooks**: Tab focus loops, visible outlines, and explicit `aria-label` tags are wired to the interactive mascot, logo elements, language menus, and forms.
- **Reduced Motion**: Handles user settings for `prefers-reduced-motion` to arrest scrolling monument backdrop speed and elephant ears flapping.
- **WCAG Contrast**: Color overlays ensure all foreground typography passes contrast checks.

### 👤 Simulated Google Authentication
- Click **"Sign in with Google"** on the sidebar to prompt a fake Google account picker dialog.
- Selecting a profile allocates details (name, email, color theme) to App state.
- Grievance filings, document logs, and chat histories are bound to that profile. Signing out or switching profiles seamlessly partitions the data.
