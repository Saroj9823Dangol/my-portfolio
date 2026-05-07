export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Pradeep Tamang",
    role: "Director, Himalayan Adventures",
    content: "Saroj is undoubtedly the best individual website developer in Nepal. He built a high-performance booking system for us that has significantly improved our conversion rates.",
    rating: 5,
    location: "Kathmandu, Nepal",
  },
  {
    name: "Rishab Shrestha",
    role: "CEO, Shrestha Tech Hub",
    content: "Excellent freelance IT services in Lalitpur. Saroj's expertise in the MERN stack helped us launch our platform ahead of schedule with zero bugs.",
    rating: 5,
    location: "Lalitpur, Nepal",
  },
  {
    name: "Hira Bhattarai",
    role: "Founder, Nepal EduTech",
    content: "The best individual website developer we have worked with. His React Native skills for our mobile app were outstanding. Professional and highly recommended.",
    rating: 5,
    location: "Kathmandu, Nepal",
  },
  {
    name: "Ayush Kusma",
    role: "Operations Manager, Valley Logistics",
    content: "Reliable, fast, and technically brilliant. Saroj is the top individual IT developer in Lalitpur for custom software solutions.",
    rating: 5,
    location: "Lalitpur, Nepal",
  },
  {
    name: "Sweta Maharjan",
    role: "Creative Director, Patan Arts",
    content: "As a local business in Patan, finding a website developer who understands our vision was key. Saroj delivered a beautiful, SEO-optimized site that ranks #1.",
    rating: 5,
    location: "Patan, Lalitpur",
  },
];
