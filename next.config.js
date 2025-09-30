// /** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

// export default nextConfig;

// const withPWA = require("next-pwa")({
//   disable: process.env.NODE_ENV === "development", // Disable in dev
//   swDest: "export",
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching: [
//     {
//       urlPattern: /^https?.*/,
//       handler: "NetworkFirst",
//       options: {
//         cacheName: "offlineCache",
//         expiration: {
//           maxEntries: 200,
//         },
//       },
//     },
//   ],
// });

// module.exports = withPWA({
//   // Your existing Next.js config
//   reactStrictMode: true,
//   swcMinify: true,
// });
