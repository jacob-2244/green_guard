// /** @type {import('next').NextConfig} */

// import withPWAInit from "@ducanh2912/next-pwa";

// const withPWA = withPWAInit({
//   dest: "public",
//   cacheOnFrontendNav:true,
//   aggressiveFrontEndNavCaching:true,
//   reloadOnOnline:true,
//   swcMinify:true,
//   disable:false,
//   workboxOptions:{
//     disableDevLogs:true,
//   }
// });

// const nextConfig = {};

// export default withPWA(nextConfig);








// /** @type {import('next').NextConfig} */
// import withPWAInit from "@ducanh2912/next-pwa";

// const withPWA = withPWAInit({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development",
//   cacheOnFrontEndNav: true,
//   reloadOnOnline: true,
//   workboxOptions: {
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/i,
//         handler: "NetworkFirst",
//         options: {
//           cacheName: "pages-cache",
//           networkTimeoutSeconds: 10,
//           expiration: {
//             maxEntries: 200,
//             maxAgeSeconds: 60 * 60 * 24 * 7, 
//           },
//         },
//       },

//       {
//         urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
//         handler: "CacheFirst",
//         options: {
//           cacheName: "images",
//           expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
//         },
//       },
//       {
//         urlPattern: /^https?.*/i,
//         handler: "NetworkFirst",
//         options: {
//           cacheName: "pages-cache",
//           networkTimeoutSeconds: 10,
//           expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 7 },
//         },
//       },
//     ],
//   },
// });

// const nextConfig = {
//   reactStrictMode: true,
// };

// export default withPWA(nextConfig);







/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
import { join } from "path";
import fs from "fs";

const publicImagesDir = join(process.cwd(), "public/images");
const imageFiles = fs
  .readdirSync(publicImagesDir)
  .filter((f) => /\.(png|jpg|jpeg|gif|svg|webp|avif)$/.test(f))
  .map((f) => `/images/${f}`);

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,

  // 🧠 These pages and assets will be cached *on install*
  precachePages: [
    "/", "/home", "/about", "/auth", "/faq", "/pricing-plan", "/service",
    ...imageFiles, // all your public images
  ],

  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: { maxEntries: 30, maxAgeSeconds: 31536000 },
      },
    },
    {
      urlPattern: /^\/images\/.*\.(png|jpg|jpeg|gif|svg|webp|avif)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "public-images",
        expiration: { maxEntries: 100, maxAgeSeconds: 2592000 },
      },
    },
    {
      urlPattern: /\/_next\/image\?url=.+$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "next-optimized-images",
        expiration: { maxEntries: 60, maxAgeSeconds: 2592000 },
      },
    },
    {
      urlPattern: /^\/_next\/.*/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "next-assets",
        expiration: { maxEntries: 100, maxAgeSeconds: 2592000 },
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withPWA(nextConfig);
