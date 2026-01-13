(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/SD/solar-system-portfolio/data/blogs/ai-web-devs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiWebDevelopmentGuide",
    ()=>aiWebDevelopmentGuide
]);
const aiWebDevelopmentGuide = {
    id: "7",
    slug: "how-ai-transforms-web-development-2025",
    title: "How AI is changing web development, jobs, and tools in 2025.",
    image: "/images/blogs/how-ai-transforms-web-development-2025.png",
    excerpt: "Explore how AI is reshaping web development in 2025, its impact on web developer jobs, new challenges, pros and cons, and the top AI tools transforming the MERN stack workflow.",
    content: `<div style="color: #e5e7eb; line-height: 1.8; font-size: 1.125rem;">
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          The AI Revolution in Web Development
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          In 2025, Artificial Intelligence (AI) is fundamentally transforming web development, automating repetitive tasks, enhancing user experiences, and reshaping the skillsets required for web developers. For MERN stack developers, AI tools are streamlining workflows, but they also introduce new challenges and opportunities. This article explores how AI is changing the role of web developers, its impact on jobs, the pros and cons, and the top AI tools driving this revolution.
        </p>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Impact on Web Developer Jobs
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          AI is both a disruptor and an enabler for web developers in 2025. While it automates repetitive tasks, it also creates demand for new skills and roles. Here's how AI is affecting web developer jobs:
        </p>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Automation of Routine Tasks:</strong> AI tools like GitHub Copilot and xAI's Grok can generate boilerplate code, debug errors, and optimize React components, reducing the need for manual coding of repetitive tasks by up to 50%.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>New Roles Emerging:</strong> Demand is growing for AI integration specialists who can implement AI-driven features like personalization and chatbots in Next.js applications.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Upskilling Requirements:</strong> Developers must learn to work with AI tools, understand machine learning basics, and focus on creative problem-solving to stay competitive.
          </li>
        </ul>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Top AI Tools for Web Developers
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          1. GitHub Copilot
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          GitHub Copilot, powered by OpenAI, is a leading AI tool in 2025, offering real-time code suggestions for React, Node.js, and MongoDB. It integrates seamlessly with IDEs like VS Code, boosting productivity for MERN stack developers.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // Example: Generating a React component with Copilot
  // components/UserCard.jsx
  import { useState } from 'react';

  export default function UserCard({ user }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={\`p-4 border \${isHovered ? 'border-blue-500' : 'border-gray-300'}\`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  }
          </code></pre>
        </div>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          2. xAI's Grok
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          xAI's Grok, accessible via grok.com and the X platform, provides advanced code generation and debugging capabilities. In 2025, it supports Next.js developers by suggesting optimized server components and API routes.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // Example: Grok-generated API route
  // app/api/users/route.js
  export async function GET() {
    const users = await fetchUsersFromDB(); // Simulated DB call
    return Response.json(users);
  }
          </code></pre>
        </div>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          3. Figma AI Plugins
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Figma's AI plugins in 2025 help developers convert designs to React components automatically, streamlining the UI development process for MERN stack projects.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // Example: Figma AI-generated React component
  // components/Button.jsx
  export default function Button({ children }) {
    return (
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {children}
      </button>
    );
  }
          </code></pre>
        </div>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Pros and Cons of AI in Web Development
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          Pros
        </h3>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Increased Productivity: AI tools reduce coding time by automating boilerplate code and debugging, allowing developers to focus on complex tasks.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Enhanced User Experience: AI-driven personalization improves engagement, with e-commerce sites reporting up to 30% higher conversion rates in 2025.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Improved Accessibility: AI generates WCAG-compliant designs and alt text, making websites more inclusive.
          </li>
        </ul>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          Cons
        </h3>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Technical Debt: Over-reliance on AI-generated code can lead to unoptimized or poorly structured codebases.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Privacy Concerns: AI personalization requires user data, raising GDPR and ethical issues.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Skill Displacement: Junior developers may face reduced demand for entry-level tasks, necessitating upskilling in AI integration.
          </li>
        </ul>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          New Challenges for Web Developers
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          AI introduces several challenges that web developers must navigate in 2025:
        </p>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Learning Curve:</strong> Developers need to master AI tools and understand machine learning concepts to integrate them effectively.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Ethical Considerations:</strong> Ensuring AI-driven personalization respects user privacy and complies with regulations like GDPR.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Performance Overhead:</strong> Running large AI models for real-time personalization can increase server costs and latency.
          </li>
        </ul>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Future Outlook for Web Developers
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          By 2026, AI is expected to automate up to 60% of repetitive web development tasks, such as UI generation and testing. However, human oversight will remain critical for creative problem-solving and ethical implementation. MERN stack developers who embrace AI tools and upskill in areas like machine learning integration and data privacy will thrive in this evolving landscape.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // Example: AI-driven personalization API
  // app/api/personalize/route.js
  export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const personalizedData = await fetchPersonalizedContent(userId); // Simulated AI call
    return Response.json(personalizedData);
  }
          </code></pre>
        </div>
      </div>
    `,
    date: "2025-07-05",
    formattedDate: "July 5, 2025",
    readingTime: "9 min",
    tags: [
        "AI",
        "Web Development",
        "MERN Stack",
        "Next.js",
        "AI Tools",
        "SEO",
        "Accessibility",
        "Jobs"
    ],
    metaTitle: "AI in Web Development: 2025 Impact on Jobs & Tools",
    metaDescription: "Discover how AI is revolutionizing web development in 2025, its impact on web developer jobs, new challenges, pros and cons, and top AI tools like GitHub Copilot and xAI's Grok for MERN stack developers.",
    author: "Saroj Dangol",
    canonicalUrl: "https://www.sarojdangol012.com.np/blogs/how-ai-transforms-web-development-2025"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/data/blogs/how-to-become-fullstack.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullStackDeveloperGuide",
    ()=>fullStackDeveloperGuide
]);
const fullStackDeveloperGuide = {
    id: "8",
    slug: "how-to-become-full-stack-developer-2025",
    title: "How to Become a Full-Stack Developer in 2025: A Roadmap",
    image: "/images/blogs/how-to-become-full-stack-developer-2025.jpeg",
    excerpt: "A comprehensive roadmap to becoming a full-stack developer in 2025, covering essential skills, tools like the MERN stack, AI integration, and strategies to stay competitive.",
    content: `<div style="color: #e5e7eb; line-height: 1.8; font-size: 1.125rem;">
          <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
              background: white; -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
            <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
                width: 4px; height: 100%; background: white; 
                border-radius: 2px;"></span>
            Introduction
          </h2>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            In 2025, the demand for full-stack developers continues to soar as businesses seek versatile professionals capable of handling both front-end and back-end development. Becoming a full-stack developer requires a blend of technical skills, problem-solving abilities, and a commitment to continuous learning. This roadmap outlines the steps, tools, and skills needed to become a full-stack developer in 2025, with a focus on the MERN stack (MongoDB, Express.js, React, Node.js) and emerging trends like AI integration and serverless architecture.
          </p>
          
          <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
              background: white; -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
            <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
                width: 4px; height: 100%; background: white; 
                border-radius: 2px;"></span>
            Why Become a Full-Stack Developer in 2025?
          </h2>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            Full-stack developers are highly valued for their ability to build end-to-end web applications. In 2025, the rise of AI-driven development, cloud-native applications, and remote work has made this role even more dynamic. Key reasons to pursue this career include:
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>High Demand:</strong> Full-stack developers are sought after by startups and enterprises, with salaries averaging $80,000-$120,000 annually, depending on location and experience.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Versatility:</strong> Work on both client-side and server-side development, offering diverse project opportunities.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Future-Proofing:</strong> Skills in AI tools, DevOps, and modern frameworks ensure long-term relevance.
            </li>
          </ul>
          
          <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
              background: white; -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
            <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%);
                width: 4px; height: 100%; background: white; 
                border-radius: 2px;"></span>
            Step-by-Step Roadmap to Become a Full-Stack Developer
          </h2>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            1. Understand the Basics of Web Development
          </h3>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            Start with the foundational technologies of the web: HTML, CSS, and JavaScript. These are the building blocks for front-end development.
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>HTML:</strong> Learn semantic HTML5 for structuring content.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>CSS:</strong> Master CSS3, including Flexbox, Grid, and responsive design principles.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>JavaScript:</strong> Understand ES6+ features like arrow functions, destructuring, and async/await.
            </li>
          </ul>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            <strong>Resources:</strong> FreeCodeCamp, MDN Web Docs, and Codecademy.
          </p>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            2. Dive into Front-End Development
          </h3>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            Focus on creating interactive and responsive user interfaces using modern frameworks.
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>React:</strong> Learn React for building dynamic UIs. Understand components, hooks, and state management with Redux or Context API.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Next.js:</strong> Explore Next.js for server-side rendering and static site generation, critical for SEO and performance.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Styling:</strong> Use Tailwind CSS or styled-components for efficient styling.
            </li>
          </ul>
          
          <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
              border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
                background: white;"></div>
            <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
                style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
    // components/Counter.jsx
    import { useState } from 'react';
  
    export default function Counter() {
      const [count, setCount] = useState(0);
  
      return (
        <div className="p-4 border border-gray-300 rounded">
          <h3>Count: {count}</h3>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      );
    }
            </code></pre>
          </div>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            3. Master Back-End Development
          </h3>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            Learn to build server-side logic, APIs, and databases to power web applications.
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Node.js & Express.js:</strong> Use Node.js for runtime and Express.js for building RESTful APIs.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>MongoDB:</strong> Learn NoSQL databases for storing and querying data.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Authentication:</strong> Implement JWT or OAuth for secure user authentication.
            </li>
          </ul>
          
          <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
              border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
                background: white;"></div>
            <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
                style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
    // app/api/users/route.js
    import { MongoClient } from 'mongodb';
  
    export async function GET() {
      const client = new MongoClient('mongodb://localhost:27017');
      try {
        await client.connect();
        const db = client.db('mydb');
        const users = await db.collection('users').find({}).toArray();
        return Response.json(users);
      } finally {
        await client.close();
      }
    }
            </code></pre>
          </div>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            4. Learn Version Control and Collaboration
          </h3>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            Version control is essential for team collaboration and code management.
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Git & GitHub:</strong> Master Git commands (commit, branch, merge) and GitHub workflows for collaboration.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>CI/CD:</strong> Understand continuous integration and deployment using tools like GitHub Actions or Vercel.
            </li>
          </ul>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            <strong>Resources:</strong> GitHub Learning Lab, Pro Git book.
          </p>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            5. Embrace AI and Automation Tools
          </h3>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            In 2025, AI tools are integral to full-stack development, boosting productivity and innovation.
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>GitHub Copilot:</strong> Use for code suggestions and debugging in React and Node.js.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>xAI's Grok:</strong> Leverage Grok for generating optimized API routes and server components.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Figma AI Plugins:</strong> Convert designs to React components for faster UI development.
            </li>
          </ul>
          
          <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
              border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
                background: white;"></div>
            <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
                style="font-family: 'JetBrainsouracil: Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
    // app/api/products/route.js
    export async function GET(request) {
      const { searchParams } = new URL(request.url);
      const category = searchParams.get('category');
      const products = await fetchProductsByCategory(category); // Simulated DB call
      return Response.json(products);
    }
            </code></pre>
          </div>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            6. Explore DevOps and Deployment
          </h3>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            Learn to deploy and manage applications in production.
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Cloud Platforms:</strong> Use AWS, Vercel, or Netlify for hosting.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Serverless Architecture:</strong> Explore AWS Lambda or Vercel Functions for scalable backends.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Docker:</strong> Containerize applications for consistent environments.
            </li>
          </ul>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            <strong>Resources:</strong> AWS Free Tier, Vercel documentation, Docker Getting Started.
          </p>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            7. Build Real-World Projects
          </h3>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            Apply your skills by building projects to showcase your expertise.
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Portfolio Website:</strong> Create a personal site using Next.js and Tailwind CSS.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>E-Commerce App:</strong> Build a full-stack app with React, Node.js, and MongoDB.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>AI-Powered Feature:</strong> Integrate a chatbot or personalization using Grok or OpenAI APIs.
            </li>
          </ul>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            <strong>Example Project Idea:</strong> A task management app with user authentication, real-time updates, and AI-driven task prioritization.
          </p>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            8. Stay Updated and Upskill
          </h3>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            The tech landscape evolves rapidly. Stay competitive by learning emerging technologies.
          </p>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>AI Integration:</strong> Understand machine learning basics for personalization and analytics.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Web3:</strong> Explore blockchain integration for decentralized apps.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Soft Skills:</strong> Develop communication and problem-solving skills for teamwork.
            </li>
          </ul>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            <strong>Resources:</strong> X Platform, TechCrunch, freeCodeCamp.
          </p>
          
          <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
              background: white; -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
            <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
                width: 4px; height: 100%; background: white; 
                border-radius: 2px;"></span>
            Pros and Cons of Being a Full-Stack Developer
          </h2>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            Pros
          </h3>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              Versatility: Work on diverse projects across the tech stack.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              High Earning Potential: Competitive salaries due to broad skillset.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              Job analyzing individual X user profiles, X posts, and their links.
  Security: High demand in startups, enterprises, and remote roles.
            </li>
          </ul>
          
          <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
            Cons
          </h3>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              Learning Curve: Requires mastery of multiple technologies.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              Time-Intensive: Keeping up with front-end and back-end trends is demanding.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              Burnout Risk: Balancing multiple roles can be overwhelming.
            </li>
          </ul>
          
          <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
              background: white; -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
            <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
                width: 4px; height: 100%; background: white; 
                border-radius: 2px;"></span>
            Challenges in 2025
          </h2>
          
          <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Keeping Up with AI Tools:</strong> Mastering tools like Grok and Copilot requires continuous learning.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: - release-1em;">•</span>
              <strong>Security:</strong> Ensuring robust authentication and data protection in full-stack apps.
            </li>
            <li style="margin-bottom: 0.5rem; position: relative;">
              <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                  width: 1em; margin-left: -1em;">•</span>
              <strong>Scalability:</strong> Building apps that handle high traffic with minimal latency.
            </li>
          </ul>
          
          <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
              background: white; -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
            <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
                width: 4px; height: 100%; background: white; 
                border-radius: 2px;"></span>
            Future Outlook
          </h2>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            By 2026, full-stack developers who integrate AI, adopt serverless architectures, and prioritize accessibility (e.g., WCAG compliance) will lead the industry. Expect 70% of repetitive tasks, like boilerplate code generation, to be automated, emphasizing the need for creative and strategic skills.
          </p>
          
          <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
              background: white; -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
            <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
                width: 4px; height: 100%; background: white; 
                border-radius: 2px;"></span>
            Conclusion
          </h2>
          
          <p style="margin-bottom: 1.5rem; text-align: justify;">
            Becoming a full-stack developer in 2025 is an exciting journey that combines technical expertise with adaptability. By mastering the MERN stack, leveraging AI tools like Grok and Copilot, and building real-world projects, you can carve out a rewarding career. Start with the basics, stay curious, and keep learning to thrive in this dynamic field.
          </p>
        </div>
      `,
    date: "2025-07-08",
    formattedDate: "July 8, 2025",
    readingTime: "10 min",
    tags: [
        "Full-Stack Development",
        "MERN Stack",
        "Web Development",
        "AI Tools",
        "Next.js",
        "Node.js",
        "Career",
        "DevOps"
    ],
    metaTitle: "How to Become a Full-Stack Developer in 2025: Roadmap & Tools",
    metaDescription: "A 2025 roadmap to becoming a full-stack developer, covering MERN stack, AI tools like GitHub Copilot and xAI's Grok, DevOps, and real-world projects to build a rewarding career.",
    author: "Saroj Dangol",
    canonicalUrl: "https://www.sarojdangol012.com.np/blogs/how-to-become-full-stack-developer-2025"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/data/blogs/jwt-authentication.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jwtAuthentication",
    ()=>jwtAuthentication
]);
const jwtAuthentication = {
    id: "1",
    slug: "mern-stack-authentication",
    title: "Complete JWT Authentication in MERN Stack",
    image: "/images/blogs/Complete-JWT-Authentication-in-MERN-Stack.jpg",
    excerpt: "Learn how to implement complete JWT authentication in a MERN stack application, including backend and frontend integration.",
    content: `
      <div style="color: #e5e7eb; line-height: 1.8; font-size: 1.125rem;">
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%;); 
              border-radius: 2px;"></span>
          Why JWT Authentication?
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          JWTs provide stateless authentication that scales well across distributed systems. Each token contains:
        </p>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Header (algorithm and token type)
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Payload (user data and claims)
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Signature (verification)
          </li>
        </ul>
    
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; 
              border-radius: 2px;"></span>
          Backend Implementation
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          1. Configure Auth Routes
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // routes/authRoutes.js
  const express = require('express');
  const { register, login, refresh, logout } = require('../controllers/authController');
  const router = express.Router();
  
  router.post('/register', register);
  router.post('/login', login);
  router.post('/refresh', refresh);
  router.post('/logout', logout);</code></pre>
        </div>
    
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          2. Create Auth Controller
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // controllers/authController.js
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcryptjs');
  const User = require('../models/User');
  const Token = require('../models/Token');
  
  const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m'
    });
  };
  
  const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '7d'
    });
  };
  
  exports.register = async (req, res) => {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.create({ email, password: hashedPassword });
      
      const accessToken = generateAccessToken(user._id);
      const refreshToken = generateRefreshToken(user._id);
      
      await new Token({ userId: user._id, token: refreshToken }).save();
      
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === 'production'
      });
      
      res.status(201).json({ accessToken });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };</code></pre>
        </div>
    
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
           background: white;-webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Frontend Implementation
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          1. Create Auth Context
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // context/AuthContext.jsx
  import { createContext, useContext, useEffect, useState } from 'react';
  import axios from 'axios';
  
  const AuthContext = createContext();
  
  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState('');
  
    const login = async (credentials) => {
      const { data } = await axios.post('/api/auth/login', credentials);
      setAccessToken(data.accessToken);
      setUser(data.user);
    };
  
    const refreshAccessToken = async () => {
      try {
        const { data } = await axios.post('/api/auth/refresh', {}, {
          withCredentials: true
        });
        setAccessToken(data.accessToken);
      } catch (error) {
        logout();
      }
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        refreshAccessToken();
      }, 14 * 60 * 1000); // Refresh before expiration
      
      return () => clearInterval(interval);
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, accessToken, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };</code></pre>
        </div>
      </div>
    `,
    date: "2023-10-01",
    formattedDate: "October 1, 2023",
    readingTime: "12 min",
    tags: [
        "MERN",
        "Authentication",
        "JWT",
        "Node.js",
        "React"
    ],
    metaTitle: "JWT Authentication in MERN: Complete 2024 Implementation",
    metaDescription: "Step-by-step guide to implementing secure JWT authentication in MERN stack. Learn token handling, protected routes, and best practices for MongoDB, Express, React, and Node.js.",
    author: "Saroj Dangol",
    canonicalUrl: `https://www.sarojdangol012.com.np/blogs/mern-stack-authentication`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/data/blogs/mern-folder-structure.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mernStackFolderStructureGuide",
    ()=>mernStackFolderStructureGuide
]);
const mernStackFolderStructureGuide = {
    id: "10",
    slug: "mern-stack-folder-structure-best-practices-2025",
    title: "MERN Stack Folder Structure Best Practices for Scalability in 2025",
    image: "/images/blogs/mern-stack-folder-structure-best-practices-2025.png",
    excerpt: "Learn the best practices for organizing a MERN stack (MongoDB, Express.js, React, Node.js) project folder structure in 2025 to ensure scalability, maintainability, and developer efficiency.",
    content: `<div style="color: #e5e7eb; line-height: 1.8; font-size: 1.125rem;">
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Introduction
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          In 2025, the MERN stack (MongoDB, Express.js, React, Node.js) remains a go-to choice for building scalable web applications. A well-organized folder structure is critical for maintaining code clarity, enabling collaboration, and ensuring scalability as projects grow. This guide outlines best practices for structuring a MERN stack project, tailored for developers aiming to build robust, maintainable applications.
        </p>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Why Folder Structure Matters
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          A clear folder structure enhances code maintainability, simplifies onboarding for new developers, and supports scalability by organizing code into modular, reusable components. In large MERN projects, poor organization can lead to technical debt, debugging challenges, and slower development cycles.
        </p>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Scalability:</strong> Modular structures support adding features without refactoring.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Collaboration:</strong> Clear organization helps teams navigate codebases efficiently.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Maintainability:</strong> Logical separation reduces bugs and simplifies updates.
          </li>
        </ul>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Recommended MERN Stack Folder Structure
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Below is a scalable folder structure for a MERN stack project, optimized for 2025 workflows, including Next.js for React and serverless API routes.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-bash" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
my-mern-app/
├── client/                     # Front-end (React/Next.js)
│   ├── components/             # Reusable React components
│   │   ├── common/            # Shared components (e.g., Button.jsx)
│   │   └── features/          # Feature-specific components (e.g., ProductCard.jsx)
│   ├── pages/                 # Next.js pages or routes
│   │   ├── index.jsx          # Home page
│   │   └── [id].jsx           # Dynamic routes
│   ├── public/                # Static assets (images, fonts)
│   ├── styles/                # CSS/Tailwind configurations
│   ├── utils/                 # Utility functions and helpers
│   ├── hooks/                 # Custom React hooks
│   └── package.json           # Front-end dependencies
├── server/                     # Back-end (Node.js/Express.js)
│   ├── api/                   # API routes
│   │   ├── routes/            # Route handlers (e.g., users.js, products.js)
│   │   └── controllers/       # Business logic for routes
│   ├── models/                # MongoDB schemas (e.g., User.js, Product.js)
│   ├── middleware/            # Custom middleware (e.g., auth.js)
│   ├── config/                # Configuration files (e.g., db.js, env)
│   ├── services/              # External services (e.g., email, payment)
│   └── package.json           # Back-end dependencies
├── tests/                     # Unit and integration tests
│   ├── client/                # Front-end tests
│   └── server/                # Back-end tests
├── scripts/                   # Build and deployment scripts
├── .env                       # Environment variables
├── .gitignore                 # Git ignore file
├── docker-compose.yml         # Docker configuration
└── README.md                  # Project documentation
          </code></pre>
        </div>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Best Practices for Folder Structure
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          1. Separate Client and Server
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Keep front-end (React/Next.js) and back-end (Node.js/Express.js) in separate directories to maintain clear boundaries and simplify deployment.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // server/api/routes/users.js
  import express from 'express';
  import { getUsers } from '../controllers/users.js';

  const router = express.Router();
  router.get('/', getUsers);

  export default router;
          </code></pre>
        </div>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          2. Modularize Components
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Organize React components into 'common' (shared UI elements) and 'features' (specific to features like products or users) to promote reusability.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // client/components/common/Button.jsx
  export default function Button({ children, onClick }) {
    return (
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
          </code></pre>
        </div>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          3. Centralize API Logic
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Group API routes and controllers under 'server/api' to keep business logic separate from routes, improving maintainability.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // server/api/controllers/users.js
  import { MongoClient } from 'mongodb';

  export async function getUsers() {
    const client = new MongoClient('mongodb://localhost:27017');
    try {
      await client.connect();
      const db = client.db('mydb');
      return await db.collection('users').find({}).toArray();
    } finally {
      await client.close();
    }
  }
          </code></pre>
        </div>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          4. Isolate MongoDB Schemas
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Store MongoDB schemas in a dedicated 'models' folder to separate data structures from business logic, enhancing clarity.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // server/models/User.js
  import mongoose from 'mongoose';

  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
  });

  export default mongoose.model('User', userSchema);
          </code></pre>
        </div>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          5. Organize Tests Effectively
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Place unit and integration tests in a 'tests' folder, mirroring the client/server structure to streamline testing workflows.
        </p>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          6. Use Environment Variables
        </h3>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Store sensitive data like database URLs and API keys in a '.env' file, loaded via 'dotenv' to keep configurations secure.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-bash" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  # .env
  MONGODB_URI=mongodb://localhost:27017/mydb
  JWT_SECRET=your_jwt_secret
  API_KEY=your_api_key
          </code></pre>
        </div>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Pros and Cons of This Structure
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          Pros
        </h3>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Scalability: Modular design supports growth without major refactoring.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Maintainability: Clear separation reduces bugs and simplifies updates.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Collaboration: Easy for teams to navigate and extend the codebase.
          </li>
        </ul>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          Cons
        </h3>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Initial Setup Time: Structuring a project requires upfront planning.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Learning Curve: New developers may need time to adapt to the structure.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Overhead for Small Projects: May feel excessive for simple applications.
          </li>
        </ul>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Integrating AI Tools for Efficiency
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          In 2025, AI tools like xAI's Grok and GitHub Copilot can generate folder structures and boilerplate code, aligning with these best practices to boost productivity.
        </p>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // client/utils/api.js 
  import axios from 'axios';

  const api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:5000/api',
  });

  export const fetchUsers = async () => {
    const response = await api.get('/users');
    return response.data;
  };
          </code></pre>
        </div>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Challenges in Structuring MERN Projects
        </h2>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Consistency:</strong> Ensuring all team members follow the structure requires clear documentation.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Scalability Trade-offs:</strong> Balancing modularity with simplicity for smaller projects.
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            <strong>Testing Integration:</strong> Structuring tests to cover both client and server requires planning.
          </li>
        </ul>
        
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Conclusion
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          A well-organized MERN stack folder structure is essential for building scalable, maintainable applications in 2025. By separating client and server, modularizing components, and leveraging AI tools like Grok, developers can streamline workflows and enhance collaboration. Adopting these best practices ensures your MERN projects are ready for growth and innovation.
        </p>
      </div>
    `,
    date: "2025-07-08",
    formattedDate: "July 8, 2025",
    readingTime: "7 min",
    tags: [
        "MERN Stack",
        "Web Development",
        "Folder Structure",
        "Scalability",
        "React",
        "Node.js",
        "MongoDB",
        "Best Practices"
    ],
    metaTitle: "MERN Stack Folder Structure Best Practices for Scalability in 2025",
    metaDescription: "Discover best practices for organizing a MERN stack project folder structure in 2025, ensuring scalability, maintainability, and developer efficiency with React, Node.js, and MongoDB.",
    author: "Saroj Dangol",
    canonicalUrl: "https://www.sarojdangol012.com.np/blogs/mern-stack-folder-structure-best-practices-2025"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/data/blogs/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_BLOG_POSTS",
    ()=>ALL_BLOG_POSTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$ai$2d$web$2d$devs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blogs/ai-web-devs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$how$2d$to$2d$become$2d$fullstack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blogs/how-to-become-fullstack.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$jwt$2d$authentication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blogs/jwt-authentication.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$mern$2d$folder$2d$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blogs/mern-folder-structure.ts [app-client] (ecmascript)");
;
;
;
;
const ALL_BLOG_POSTS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$ai$2d$web$2d$devs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiWebDevelopmentGuide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$how$2d$to$2d$become$2d$fullstack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullStackDeveloperGuide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$jwt$2d$authentication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtAuthentication"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$mern$2d$folder$2d$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mernStackFolderStructureGuide"],
    mernStackDominanceGuide,
    mernStackGuide,
    microFrontendsGuide,
    reactPerformance,
    reactServerComponentsGuide,
    serverComponentsGuide,
    ssrVsCsrGuide,
    webAssemblyGuide
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogContent",
    ()=>BlogContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/framer-motion@12.23.26_@emotion+is-prop-valid@1.4.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/framer-motion@12.23.26_@emotion+is-prop-valid@1.4.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rss$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/rss.js [app-client] (ecmascript) <export default as Rss>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blogs/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BlogDetail({ post, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: -50
        },
        className: "max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: onBack,
                className: "flex items-center gap-2 text-moon-gray font-terminal text-sm mb-6 hover:text-foreground transition-colors group",
                whileHover: {
                    x: -4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 16,
                        className: "group-hover:-translate-x-1 transition-transform"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    "Back to all posts"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.1
                },
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4 mb-4 text-muted-foreground font-terminal text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    post.formattedDate || new Date(post.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    post.readingTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-lg text-muted-foreground leading-relaxed",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-4",
                        children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 px-3 py-1.5 rounded-full bg-moon-gray/10 text-moon-gray font-terminal text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        size: 10
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    tag
                                ]
                            }, tag, true, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scaleX: 0
                },
                animate: {
                    scaleX: 1
                },
                transition: {
                    delay: 0.2
                },
                className: "h-px bg-gradient-to-r from-transparent via-moon-gray/50 to-transparent mb-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.3
                },
                className: "prose prose-invert prose-moon max-w-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-body text-muted-foreground leading-relaxed",
                    dangerouslySetInnerHTML: {
                        __html: post.content
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].footer, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.4
                },
                className: "mt-12 pt-8 border-t border-moon-gray/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass rounded-xl p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-terminal text-muted-foreground mb-4",
                            children: "Enjoyed this article? Check out more posts or get in touch."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "px-6 py-2 bg-moon-gray/20 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/30 transition-colors",
                            children: "View All Posts"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = BlogDetail;
function BlogContent() {
    _s();
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: selectedPost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogDetail, {
            post: selectedPost,
            onBack: ()=>setSelectedPost(null)
        }, "detail", false, {
            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
            lineNumber: 123,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                x: -50
            },
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "glass rounded-xl p-4 mb-8 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rss$3e$__["Rss"], {
                                    className: "text-moon-gray"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-terminal text-muted-foreground",
                                    children: "Satellite Feed"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 bg-moon-gray/10 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/20 transition-colors",
                            children: "Subscribe to RSS"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_BLOG_POSTS"].map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: i * 0.1
                            },
                            onClick: ()=>setSelectedPost(post),
                            className: "glass rounded-xl p-6 hover:border-moon-gray/50 transition-colors group cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4 mb-3 text-muted-foreground font-terminal text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this),
                                                new Date(post.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this),
                                                post.readingTime
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl text-moon-gray mb-2 group-hover:text-foreground transition-colors",
                                    children: post.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body text-muted-foreground mb-4 leading-relaxed",
                                    children: post.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 rounded-md bg-moon-gray/10 text-moon-gray font-terminal text-xs",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 text-moon-gray font-terminal text-sm opacity-0 group-hover:opacity-100 transition-opacity",
                                            children: [
                                                "Read more ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, post.id, true, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 156,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            ]
        }, "list", true, {
            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
            lineNumber: 129,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(BlogContent, "gO2hpKITQnTFbbgLvGWkMtNfAjI=");
_c1 = BlogContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "BlogDetail");
__turbopack_context__.k.register(_c1, "BlogContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_SD_solar-system-portfolio_75f59e26._.js.map