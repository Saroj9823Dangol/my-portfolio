export const jwtAuthentication = {
  id: "1",
  slug: "mern-stack-authentication",
  title: "Complete JWT Authentication in MERN Stack",
  image: "/images/blogs/Complete-JWT-Authentication-in-MERN-Stack.jpg",
  excerpt:
    "Learn how to implement complete JWT authentication in a MERN stack application, including backend and frontend integration.",
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
  tags: ["MERN", "Authentication", "JWT", "Node.js", "React"],
  metaTitle: "JWT Authentication in MERN: Complete 2024 Implementation",
  metaDescription:
    "Step-by-step guide to implementing secure JWT authentication in MERN stack. Learn token handling, protected routes, and best practices for MongoDB, Express, React, and Node.js.",
  author: "Saroj Dangol",
  canonicalUrl: `https://www.sarojdangol012.com.np/blogs/mern-stack-authentication`,
};
