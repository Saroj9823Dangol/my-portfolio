module.exports = [
"[project]/Desktop/SD/solar-system-portfolio/data/blogs/ai-web-devs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/SD/solar-system-portfolio/data/blogs/how-to-become-fullstack.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/SD/solar-system-portfolio/data/blogs/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_BLOG_POSTS",
    ()=>ALL_BLOG_POSTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$ai$2d$web$2d$devs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blogs/ai-web-devs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$how$2d$to$2d$become$2d$fullstack$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blogs/how-to-become-fullstack.ts [app-ssr] (ecmascript)");
;
;
const ALL_BLOG_POSTS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$ai$2d$web$2d$devs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aiWebDevelopmentGuide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$how$2d$to$2d$become$2d$fullstack$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullStackDeveloperGuide"],
    jwtAuthentication,
    mernStackFolderStructureGuide,
    mernStackDominanceGuide,
    mernStackGuide,
    microFrontendsGuide,
    reactPerformance,
    reactServerComponentsGuide,
    serverComponentsGuide,
    ssrVsCsrGuide,
    webAssemblyGuide
];
}),
"[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogContent",
    ()=>BlogContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/framer-motion@12.23.26_@emotion+is-prop-valid@1.4.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/framer-motion@12.23.26_@emotion+is-prop-valid@1.4.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rss$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rss$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/rss.js [app-ssr] (ecmascript) <export default as Rss>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blogs/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function BlogDetail({ post, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: onBack,
                className: "flex items-center gap-2 text-moon-gray font-terminal text-sm mb-6 hover:text-foreground transition-colors group",
                whileHover: {
                    x: -4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4 mb-4 text-muted-foreground font-terminal text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    new Date(post.date).toLocaleDateString("en-US", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    post.readTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-lg text-muted-foreground leading-relaxed",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-4",
                        children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 px-3 py-1.5 rounded-full bg-moon-gray/10 text-moon-gray font-terminal text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        size: 10
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    tag
                                ]
                            }, tag, true, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].article, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-body text-muted-foreground leading-relaxed space-y-6",
                    children: post.content.split("\n\n").map((paragraph, i)=>{
                        // Handle headings
                        if (paragraph.startsWith("## ")) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-2xl text-moon-gray mt-10 mb-4 first:mt-0",
                                children: paragraph.replace("## ", "")
                            }, i, false, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, this);
                        }
                        // Handle code blocks
                        if (paragraph.includes("```")) {
                            const codeMatch = paragraph.match(/```(\w+)?\n([\s\S]*?)```/);
                            if (codeMatch) {
                                const [, language, code] = codeMatch;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 left-0 px-3 py-1 bg-moon-gray/20 rounded-tl-lg rounded-br-lg font-terminal text-xs text-moon-gray",
                                            children: language || "code"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 108,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "glass rounded-xl p-4 pt-8 overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "font-terminal text-sm text-foreground/90",
                                                children: code.trim()
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                lineNumber: 112,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 107,
                                    columnNumber: 19
                                }, this);
                            }
                        }
                        // Handle inline code
                        if (paragraph.includes("`")) {
                            const parts = paragraph.split(/(`[^`]+`)/);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: parts.map((part, j)=>{
                                    if (part.startsWith("`") && part.endsWith("`")) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "px-1.5 py-0.5 bg-moon-gray/20 rounded font-terminal text-sm text-moon-gray",
                                            children: part.slice(1, -1)
                                        }, j, false, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 129,
                                            columnNumber: 25
                                        }, this);
                                    }
                                    return part;
                                })
                            }, i, false, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 125,
                                columnNumber: 17
                            }, this);
                        }
                        // Handle lists
                        if (paragraph.startsWith("- ")) {
                            const items = paragraph.split("\n").filter((line)=>line.startsWith("- "));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 ml-4",
                                children: items.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-moon-gray mt-1.5",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                lineNumber: 152,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.replace("- ", "")
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                lineNumber: 153,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, j, true, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                        lineNumber: 151,
                                        columnNumber: 21
                                    }, this))
                            }, i, false, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, this);
                        }
                        // Regular paragraphs
                        if (paragraph.trim()) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: paragraph
                            }, i, false, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                lineNumber: 162,
                                columnNumber: 22
                            }, this);
                        }
                        return null;
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].footer, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass rounded-xl p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-terminal text-muted-foreground mb-4",
                            children: "Enjoyed this article? Check out more posts or get in touch."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "px-6 py-2 bg-moon-gray/20 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/30 transition-colors",
                            children: "View All Posts"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function BlogContent() {
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: selectedPost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogDetail, {
            post: selectedPost,
            onBack: ()=>setSelectedPost(null)
        }, "detail", false, {
            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
            lineNumber: 199,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rss$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rss$3e$__["Rss"], {
                                    className: "text-moon-gray"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-terminal text-muted-foreground",
                                    children: "Satellite Feed"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 bg-moon-gray/10 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/20 transition-colors",
                            children: "Subscribe to RSS"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blogs$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_BLOG_POSTS"].map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].article, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4 mb-3 text-muted-foreground font-terminal text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                    lineNumber: 242,
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
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, this),
                                                post.readTime
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 240,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl text-moon-gray mb-2 group-hover:text-foreground transition-colors",
                                    children: post.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 255,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body text-muted-foreground mb-4 leading-relaxed",
                                    children: post.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 rounded-md bg-moon-gray/10 text-moon-gray font-terminal text-xs",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 text-moon-gray font-terminal text-sm opacity-0 group-hover:opacity-100 transition-opacity",
                                            children: [
                                                "Read more ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                            lineNumber: 275,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                                    lineNumber: 263,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, post.id, true, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                            lineNumber: 232,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
                    lineNumber: 230,
                    columnNumber: 11
                }, this)
            ]
        }, "list", true, {
            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
            lineNumber: 205,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/blog-content.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_SD_solar-system-portfolio_e1f1fbb9._.js.map