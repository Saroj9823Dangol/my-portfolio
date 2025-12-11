"use client";

/**
 * Blog Posts Data
 * Contains all blog post content for the portfolio
 */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "3d-portfolio-react-three-fiber",
    title: "Building a 3D Portfolio with React Three Fiber",
    excerpt:
      "Learn how to create an immersive 3D experience for your portfolio using React Three Fiber and Next.js.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Three.js", "Tutorial"],
    content: `
## Introduction

Creating a unique portfolio that stands out from the crowd is essential in today's competitive job market. In this tutorial, I'll walk you through the process of building an interactive 3D solar system portfolio using React Three Fiber.

## Why React Three Fiber?

React Three Fiber (R3F) is a React renderer for Three.js that brings the declarative nature of React to 3D graphics. Here's why it's perfect for this project:

- **Declarative syntax** - Write 3D scenes as React components
- **Ecosystem integration** - Use React hooks, state management, and other libraries
- **Performance** - Automatic batching and optimization

## Setting Up the Project

First, create a new Next.js project and install the required dependencies:

\`\`\`bash
npx create-next-app@latest my-3d-portfolio
cd my-3d-portfolio
npm install @react-three/fiber @react-three/drei three
\`\`\`

## Creating the Solar System

The core of our portfolio is the solar system scene. Each planet represents a section of the portfolio:

\`\`\`tsx
function Planet({ position, color, onClick }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    meshRef.current.rotation.y += 0.01
  })
  
  return (
    <mesh ref={meshRef} position={position} onClick={onClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
\`\`\`

## Adding Interactivity

To make the portfolio engaging, we add click handlers to navigate between sections and smooth camera transitions using GSAP or Framer Motion.

## Conclusion

Building a 3D portfolio showcases your technical skills while providing visitors with a memorable experience. The combination of React Three Fiber and Next.js gives you the best of both worlds - stunning visuals with excellent performance.
    `,
  },
  {
    id: "future-web-development-2024",
    title: "The Future of Web Development in 2024",
    excerpt:
      "Exploring emerging trends, technologies, and predictions for the web development landscape.",
    date: "2024-01-10",
    readTime: "5 min read",
    tags: ["Web Dev", "Trends"],
    content: `
## The Evolving Landscape

Web development continues to evolve at a rapid pace. Here are the key trends shaping our industry in 2024.

## AI-Powered Development

Artificial intelligence is transforming how we write code:

- **Code completion** - GitHub Copilot and similar tools
- **Automated testing** - AI-generated test cases
- **Design-to-code** - Converting mockups to functional code

## Server Components & Streaming

React Server Components have matured, offering:

- Reduced client-side JavaScript
- Improved initial page loads
- Better SEO performance

## Edge Computing

The edge is becoming more powerful:

\`\`\`typescript
// Middleware running at the edge
export function middleware(request: NextRequest) {
  // Personalization at the edge
  const country = request.geo?.country
  return NextResponse.rewrite(new URL(\`/\${country}/home\`, request.url))
}
\`\`\`

## WebAssembly Growth

WASM is enabling new possibilities:

- Near-native performance in browsers
- Language diversity (Rust, Go, C++)
- Complex applications like video editors and games

## Conclusion

Staying current with these trends will help you build better, faster, and more innovative web applications.
    `,
  },
  {
    id: "mastering-typescript-patterns",
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt:
      "Deep dive into advanced TypeScript patterns that will level up your development skills.",
    date: "2024-01-05",
    readTime: "12 min read",
    tags: ["TypeScript", "Advanced"],
    content: `
## Beyond the Basics

TypeScript offers powerful features beyond basic type annotations. Let's explore advanced patterns that will make your code more robust.

## Discriminated Unions

One of TypeScript's most powerful patterns:

\`\`\`typescript
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: Error }

function handleResult<T>(result: Result<T>) {
  if (result.success) {
    console.log(result.data) // TypeScript knows data exists
  } else {
    console.error(result.error) // TypeScript knows error exists
  }
}
\`\`\`

## Template Literal Types

Create types from string patterns:

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`
type CSSValue = \`\${number}px\` | \`\${number}rem\` | \`\${number}%\`

const margin: CSSValue = "16px" // Valid
const padding: CSSValue = "2rem" // Valid
\`\`\`

## Conditional Types

Build types that adapt based on conditions:

\`\`\`typescript
type ArrayElement<T> = T extends (infer U)[] ? U : never

type Item = ArrayElement<string[]> // string
type Never = ArrayElement<number> // never
\`\`\`

## The infer Keyword

Extract types from other types:

\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

function greet(): string { return "hello" }
type Greeting = ReturnType<typeof greet> // string
\`\`\`

## Conclusion

Mastering these patterns will help you write more maintainable and type-safe code. Practice these concepts in your daily work to internalize them.
    `,
  },
  {
    id: "framer-motion-animations",
    title: "Creating Smooth Animations with Framer Motion",
    excerpt:
      "A comprehensive guide to building beautiful animations in React applications.",
    date: "2024-01-01",
    readTime: "6 min read",
    tags: ["Animation", "React"],
    content: `
## Why Framer Motion?

Framer Motion is the animation library of choice for React applications. It provides a simple, declarative API for creating complex animations.

## Basic Animations

Getting started is simple:

\`\`\`tsx
import { motion } from "framer-motion"

function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
\`\`\`

## Variants for Complex Sequences

Organize animations with variants:

\`\`\`tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

function List({ items }) {
  return (
    <motion.ul variants={containerVariants} initial="hidden" animate="visible">
      {items.map(item => (
        <motion.li key={item.id} variants={itemVariants}>
          {item.text}
        </motion.li>
      ))}
    </motion.ul>
  )
}
\`\`\`

## Gesture Animations

Add interactivity with gestures:

\`\`\`tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Click me
</motion.button>
\`\`\`

## Layout Animations

Animate layout changes automatically:

\`\`\`tsx
<motion.div layout>
  {isExpanded && <motion.p layout>More content here</motion.p>}
</motion.div>
\`\`\`

## Conclusion

Framer Motion makes it easy to add polish to your React applications. Start with simple animations and gradually incorporate more complex patterns.
    `,
  },
];
