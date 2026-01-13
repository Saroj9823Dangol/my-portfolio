1:"$Sreact.fragment"
2:I[1089,["/_next/static/chunks/1f15e964d5e9e2a8.js","/_next/static/chunks/8668be3abf20b684.js","/_next/static/chunks/65d4a554567c7e54.js"],"default"]
7:I[74662,["/_next/static/chunks/f60b2d32fe610be5.js","/_next/static/chunks/7c455c799ae90de5.js"],"OutletBoundary"]
8:"$Sreact.suspense"
3:T2623,
      <div style="color: #e5e7eb; line-height: 1.8; font-size: 1.125rem;">
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Why Micro-Frontends in 2025?
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          Micro-frontends have become a game-changer in 2025, enabling large-scale web applications to be developed and deployed by independent teams. By breaking down monolithic frontends into smaller, manageable pieces, micro-frontends improve scalability, maintainability, and team autonomy. Key benefits include:
        </p>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Independent development and deployment by multiple teams
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Enhanced scalability for large applications
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Seamless integration with modern frameworks like Next.js
          </li>
        </ul>
  
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Setting Up Micro-Frontends with Next.js
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          1. Configure Module Federation
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // next.config.mjs
  import { NextFederationPlugin } from '@module-federation/nextjs-mf';

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            nav: 'nav@http://localhost:3001/remoteEntry.js',
            dashboard: 'dashboard@http://localhost:3002/remoteEntry.js',
          },
        })
      );
      return config;
    },
  };

  export default nextConfig;
          </code></pre>
        </div>
  
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          2. Creating a Remote Module
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // nav/next.config.mjs
  import { NextFederationPlugin } from '@module-federation/nextjs-mf';

  export default {
    webpack(config) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'nav',
          filename: 'remoteEntry.js',
          exposes: {
            './Navigation': './components/Navigation.jsx',
          },
        })
      );
      return config;
    },
  };
          </code></pre>
        </div>
  
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Integrating Micro-Frontends in a Host App
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          1. Host Application Setup
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // app/page.jsx
  import dynamic from 'next/dynamic';

  const Navigation = dynamic(() => import('nav/Navigation'), { ssr: false });

  export default function HomePage() {
    return (
      <div>
        <Navigation />
        <span>Welcome to the Micro-Frontend App</span>
      </div>
    );
  }
          </code></pre>
        </div>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          2. Server-Side Rendering Considerations
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // app/page.server.jsx
  import { fetchNavData } from '../lib/api';

  export default async function HomePage() {
    const navData = await fetchNavData();
    
    return (
      <div>
        <span>Welcome to the Micro-Frontend App</span>
        <nav>{navData.map(item => <a key={item.id} href={item.url}>{item.label}</a>)}</nav>
      </div>
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
          Best Practices for Micro-Frontends
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          To ensure scalable and maintainable micro-frontends in 2025, follow these SEO-friendly best practices:
        </p>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Use Module Federation for dynamic module loading
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Implement consistent SEO strategies across micro-frontends
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Optimize performance with lazy loading and caching
          </li>
        </ul>
      </div>
    0:{"buildId":"gbAw0zW9_-lLai1G7Mw1T","rsc":["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"Building Scalable Micro-Frontends with Next.js in 2025\",\"description\":\"Discover how to build scalable micro-frontends using Next.js in 2025, with practical examples, performance optimization techniques, and SEO best practices for modern web applications.\",\"image\":\"https://www.sarojdangol012.com.np/images/blogs/mirco-frontend-nextjs.jpg\",\"datePublished\":\"2025-07-05\",\"dateModified\":\"2025-07-05\",\"author\":{\"@type\":\"Person\",\"name\":\"Saroj Dangol\"},\"publisher\":{\"@type\":\"Person\",\"name\":\"Saroj Dangol\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://www.sarojdangol012.com.np/blogs/building-scalable-micro-frontends-nextjs-2025\"},\"keywords\":\"Micro-Frontends, Next.js, Web Development, Module Federation, SEO, Performance, Scalability\"}"}}],["$","$L2",null,{"post":{"id":"5","slug":"building-scalable-micro-frontends-nextjs-2025","title":"Building Scalable Micro-Frontends with Next.js in 2025","image":"/images/blogs/mirco-frontend-nextjs.jpg","excerpt":"Discover how to build scalable micro-frontends using Next.js in 2025, with practical examples, performance optimization techniques, and SEO best practices for modern web applications.","content":"$3","date":"2025-07-05","formattedDate":"July 5, 2025","readingTime":"8 min","tags":["Micro-Frontends","Next.js","Web Development","Module Federation","SEO","Performance","Scalability"],"metaTitle":"Next.js Micro-Frontends: 2025 Scalability Guide","metaDescription":"Learn how to build scalable micro-frontends with Next.js in 2025, including Module Federation setup, server-side rendering, and SEO best practices for modern web applications.","author":"Saroj Dangol","canonicalUrl":"https://www.sarojdangol012.com.np/blogs/building-scalable-micro-frontends-nextjs-2025"}}]],["$L4","$L5"],"$L6"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/8668be3abf20b684.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/65d4a554567c7e54.js","async":true}]
6:["$","$L7",null,{"children":["$","$8",null,{"name":"Next.MetadataOutlet","children":"$@9"}]}]
9:null
