# Solar System Portfolio

An interactive 3D portfolio website featuring a navigable solar system with terminal interface.

## Features

- **3D Solar System** - Navigate through an interactive solar system built with React Three Fiber
- **Terminal Interface** - Retro-style command-line interface for navigation and easter eggs
- **Responsive Design** - Optimized for all screen sizes
- **Performance Optimized** - Lazy loading, memoization, and efficient rendering

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **3D Graphics**: React Three Fiber + Three.js
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Fonts**: Orbitron, Space Mono, Rajdhani

## Project Structure

\`\`\`
├── app/
│   ├── globals.css       # Global styles & theme tokens
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Main page component
├── components/
│   ├── content/          # Planet content sections
│   │   ├── about-content.tsx
│   │   ├── blog-content.tsx
│   │   ├── contact-content.tsx
│   │   ├── experience-content.tsx
│   │   ├── projects-content.tsx
│   │   ├── skills-content.tsx
│   │   └── sun-content.tsx
│   ├── effects/
│   │   └── starfield.tsx # Canvas-based star background
│   ├── terminal/
│   │   └── terminal.tsx  # Command-line interface
│   ├── floating-nav.tsx  # Navigation bar
│   ├── loading-screen.tsx
│   ├── planet-overlay.tsx
│   └── solar-system.tsx  # 3D scene
├── lib/
│   ├── constants/
│   │   └── planets.ts    # Planet configuration
│   └── types/
│       └── index.ts      # TypeScript types
└── README.md
\`\`\`

## Terminal Commands

| Command | Description |
|---------|-------------|
| `help` | Show available commands |
| `whoami` | About the developer |
| `ls` | List all sections |
| `goto <planet>` | Navigate to a planet |
| `list projects` | Show all projects |
| `show skills` | Display skills |
| `contact` | Open contact form |
| `clear` | Clear terminal |
| `sudo hire-me` | Easter egg! |

## Keyboard Shortcuts

- **`** (backtick) - Toggle terminal
- **ESC** - Close overlay / Return to home

## Performance Optimizations

1. **Lazy Loading** - 3D scene and content components are dynamically imported
2. **Memoization** - Heavy components use `React.memo` to prevent unnecessary re-renders
3. **Efficient Canvas** - Starfield uses optimized canvas rendering with batched draw calls
4. **DPR Scaling** - Canvas adapts to device pixel ratio for crisp rendering

## License

MIT
