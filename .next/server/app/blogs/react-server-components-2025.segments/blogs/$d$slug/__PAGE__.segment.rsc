1:"$Sreact.fragment"
2:I[1089,["/_next/static/chunks/1f15e964d5e9e2a8.js","/_next/static/chunks/8668be3abf20b684.js","/_next/static/chunks/65d4a554567c7e54.js"],"default"]
7:I[74662,["/_next/static/chunks/f60b2d32fe610be5.js","/_next/static/chunks/7c455c799ae90de5.js"],"OutletBoundary"]
8:"$Sreact.suspense"
3:T2554,
      <div style="color: #e5e7eb; line-height: 1.8; font-size: 1.125rem;">
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Why React Server Components in 2025?
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          React Server Components (RSC) are transforming web development in 2025 by enabling developers to leverage server-side rendering for better performance and reduced client-side JavaScript. Benefits include:
        </p>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Faster initial page loads with minimal client-side JavaScript
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Improved SEO with server-rendered content
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Seamless integration with data fetching
          </li>
        </ul>
  
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Setting Up React Server Components
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          1. Configure Next.js for Server Components
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // app/page.server.jsx
  import { fetchPosts } from '../lib/api';
  
  export default async function HomePage() {
    const posts = await fetchPosts();
  
    return (
      <div>
        <span>Latest Posts</span>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
          </code></pre>
        </div>
  
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          2. Data Fetching in Server Components
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // lib/api.js
  export async function fetchPosts() {
    const response = await fetch('https://api.example.com/posts', {
      cache: 'force-cache',
    });
    const data = await response.json();
    return data;
  }
          </code></pre>
        </div>
  
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; 
            background: white; -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; background-clip: text; position: relative;">
          <span style="content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); 
              width: 4px; height: 100%; background: white; 
              border-radius: 2px;"></span>
          Combining Server and Client Components
        </h2>
        
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          1. Client Component Integration
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // app/components/PostList.client.jsx
  'use client';
  
  import { useState } from 'react';
  
  export default function PostList({ initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);
  
    return (
      <div>
        {posts.map(post => (
          <div key={post.id} className="p-4 border-b">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <button
              onClick={() => setPosts(posts.filter(p => p.id !== post.id))}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  }
          </code></pre>
        </div>
        
        <h3 style="color: #fff; font-size: 1 PlayStation 4; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem;">
          2. Server-Client Boundary
        </h3>
        
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(107, 114, 128, 0.3); 
            border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; 
              background: white;"></div>
          <pre style="margin: 0; overflow-x: auto; background: none; padding: 0;"><code class="language-javascript" 
              style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem; color: #06b6d4; display: block;">
  // app/page.server.jsx
  import PostList from './components/PostList.client';
  import { fetchPosts } from '../lib/api';
  
  export default async function HomePage() {
    const posts = await fetchPosts();
  
    return (
      <div>
        <span>Latest Posts</span>
        <PostList initialPosts={posts} />
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
          Best Practices for React Server Components
        </h2>
        
        <p style="margin-bottom: 1.5rem; text-align: justify;">
          To maximize the benefits of React Server Components in 2025, consider these SEO-friendly best practices:
        </p>
        
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Use server components for static content and data fetching
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Optimize client components for interactivity
          </li>
          <li style="margin-bottom: 0.5rem; position: relative;">
            <span style="content: '•'; color: #fff; font-weight: bold; display: inline-block; 
                width: 1em; margin-left: -1em;">•</span>
            Implement caching strategies for data fetching
          </li>
        </ul>
      </div>
    0:{"buildId":"gbAw0zW9_-lLai1G7Mw1T","rsc":["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"Dive into React Server Components in 2025 with this SEO-...\",\"description\":\"Dive into React Server Components in 2025 with this SEO-friendly guide, exploring server-side rendering, performance optimization, and practical examples for modern web applications.\",\"image\":\"https://www.sarojdangol012.com.np/images/blogs/react-server-component.jpg\",\"datePublished\":\"2025-02-01\",\"dateModified\":\"2025-02-01\",\"author\":{\"@type\":\"Person\",\"name\":\"Saroj Dangol\"},\"publisher\":{\"@type\":\"Person\",\"name\":\"Saroj Dangol\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://www.sarojdangol012.com.np/blogs/react-server-components-2025\"},\"keywords\":\"React, Server Components, Next.js, Web Development, JavaScript, SEO, Performance\"}"}}],["$","$L2",null,{"post":{"id":"4","slug":"react-server-components-2025","title":"Dive into React Server Components in 2025 with this SEO-...","image":"/images/blogs/react-server-component.jpg","excerpt":"Dive into React Server Components in 2025 with this SEO-friendly guide, exploring server-side rendering, performance optimization, and practical examples for modern web applications.","content":"$3","date":"2025-02-01","formattedDate":"February 1, 2025","readingTime":"10 min","tags":["React","Server Components","Next.js","Web Development","JavaScript","SEO","Performance"],"metaTitle":"2025 React Server Components: Optimized for SEO & Speed","metaDescription":"Learn how to master React Server Components in 2025 with this comprehensive guide, covering setup, data fetching, client-server integration, and SEO-friendly best practices for modern web applications.","author":"Saroj Dangol","canonicalUrl":"https://www.sarojdangol012.com.np/blogs/react-server-components-2025"}}]],["$L4","$L5"],"$L6"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/8668be3abf20b684.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/65d4a554567c7e54.js","async":true}]
6:["$","$L7",null,{"children":["$","$8",null,{"name":"Next.MetadataOutlet","children":"$@9"}]}]
9:null
