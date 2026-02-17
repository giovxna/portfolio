# Giovana Portfolio - Vite React App

Modern, clean portfolio built with React and Vite following senior developer best practices.

## Tech Stack

- React 18
- Vite 5
- React Router 6
- CSS Modules
- Modern ES6+ JavaScript

## Features

- ⚡ Fast build with Vite
- 🎨 Clean, modular component architecture
- 🎭 Smooth scroll animations
- 📱 Fully responsive design
- 🧩 Reusable components and hooks
- 🎯 No comments - self-documenting code
- 🚀 Optimized for performance

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/             # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   └── ProjectCase.jsx
├── hooks/             # Custom React hooks
│   └── useRevealOnScroll.js
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode at http://localhost:3000

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Key Components

### Custom Hooks

- **useRevealOnScroll**: Intersection Observer hook for scroll animations

### Pages

- **Home**: Main portfolio page with hero, projects grid, and experience
- **About**: About page with terminal animation and story section
- **ProjectCase**: Individual project case study page

### Components

- **Header**: Sticky navigation with scroll effects
- **Footer**: Reusable footer with CTA

## Code Practices

- Clean, readable code without comments
- Component-based architecture
- CSS modules for scoped styling
- Custom hooks for reusable logic
- Semantic HTML
- Performance optimizations
- Responsive design patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved
