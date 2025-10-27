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







// /** @type {import('next').NextConfig} */
// import withPWAInit from "@ducanh2912/next-pwa";
// import { join } from "path";
// import fs from "fs";

// const publicImagesDir = join(process.cwd(), "public/images");
// const imageFiles = fs
//   .readdirSync(publicImagesDir)
//   .filter((f) => /\.(png|jpg|jpeg|gif|svg|webp|avif)$/.test(f))
//   .map((f) => `/images/${f}`);

// const withPWA = withPWAInit({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   skipWaiting: true,
//   cacheOnFrontEndNav: true,
//   reloadOnOnline: true,

//   // 🧠 These pages and assets will be cached *on install*
//   precachePages: [
//     "/", "/home", "/about", "/auth", "/faq", "/pricing-plan", "/service",
//     ...imageFiles, // all your public images
//   ],

//   runtimeCaching: [
//     {
//       urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
//       handler: "CacheFirst",
//       options: {
//         cacheName: "google-fonts",
//         expiration: { maxEntries: 30, maxAgeSeconds: 31536000 },
//       },
//     },
//     {
//       urlPattern: /^\/images\/.*\.(png|jpg|jpeg|gif|svg|webp|avif)$/i,
//       handler: "CacheFirst",
//       options: {
//         cacheName: "public-images",
//         expiration: { maxEntries: 100, maxAgeSeconds: 2592000 },
//       },
//     },
//     {
//       urlPattern: /\/_next\/image\?url=.+$/i,
//       handler: "StaleWhileRevalidate",
//       options: {
//         cacheName: "next-optimized-images",
//         expiration: { maxEntries: 60, maxAgeSeconds: 2592000 },
//       },
//     },
//     {
//       urlPattern: /^\/_next\/.*/i,
//       handler: "StaleWhileRevalidate",
//       options: {
//         cacheName: "next-assets",
//         expiration: { maxEntries: 100, maxAgeSeconds: 2592000 },
//       },
//     },
//   ],
// });

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// export default withPWA(nextConfig);











/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
import { join } from "path";
import fs from "fs";

// Recursively get all files from a directory
function getAllFiles(dirPath, arrayOfFiles = [], baseDir = dirPath) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles, baseDir);
    } else {
      // Convert to web path
      const webPath = filePath
        .replace(baseDir, "")
        .replace(/\\/g, "/")
        .replace(/^\//, "");
      arrayOfFiles.push(`/${webPath}`);
    }
  });

  return arrayOfFiles;
}

// Get all images from public/images
const publicImagesDir = join(process.cwd(), "public/images");
const imageFiles = getAllFiles(publicImagesDir, [], publicImagesDir).filter((f) =>
  /\.(png|jpg|jpeg|gif|svg|webp|avif|ico)$/i.test(f)
);

// Get all SVGs from public/svgs
const publicSvgsDir = join(process.cwd(), "public/svgs");
const svgFiles = getAllFiles(publicSvgsDir, [], publicSvgsDir).filter((f) =>
  /\.svg$/i.test(f)
);

// Get all other public assets
const publicDir = join(process.cwd(), "public");
const otherPublicFiles = fs.existsSync(publicDir)
  ? fs.readdirSync(publicDir)
      .filter((f) => {
        const filePath = join(publicDir, f);
        return (
          fs.statSync(filePath).isFile() &&
          /\.(json|xml|txt|ico|png|jpg|jpeg|webp|avif)$/i.test(f)
        );
      })
      .map((f) => `/${f}`)
  : [];

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  fallbacks: {
    document: "/offline.html",
  },

  // Precache all pages and assets on install
  precachePages: [
    "/",
    "/home",
    "/about",
    "/auth",
    "/faq",
    "/pricing-plan",
    "/service",
    ...imageFiles, // All images from public/images
    ...svgFiles, // All SVGs from public/svgs
    ...otherPublicFiles, // manifest.json, robots.txt, etc.
  ],

  // Disable Next.js image optimization for better offline support
  cacheOnNavigation: true,
  aggressiveFrontEndNavCaching: true,

  workboxOptions: {
    // Increase max file size to cache
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB

    runtimeCaching: [
      // Cache Google Fonts
      {
        urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts",
          expiration: {
            maxEntries: 30,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Cache all images (including SVGs)
      {
        urlPattern: /\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Cache Next.js optimized images - MORE AGGRESSIVE
      {
        urlPattern: /\/_next\/image\?url=.+$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "next-optimized-images",
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Cache image loader URLs
      {
        urlPattern: /^.*\/image\?url=.*$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "image-loader-cache",
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Cache Next.js static assets (JS, CSS, fonts)
      {
        urlPattern: /^\/_next\/static\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static-assets",
          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Cache Next.js data files
      {
        urlPattern: /^\/_next\/data\/.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "next-data",
          networkTimeoutSeconds: 3,
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60, // 1 day
          },
        },
      },

      // Cache other Next.js assets
      {
        urlPattern: /^\/_next\/.*/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "next-assets",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
        },
      },

      // Cache all page navigations
      {
        urlPattern: ({ request, url }) => {
          return (
            request.mode === "navigate" &&
            url.origin === self.location.origin
          );
        },
        handler: "NetworkFirst",
        options: {
          cacheName: "pages-cache",
          networkTimeoutSeconds: 3,
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Cache any same-origin requests
      {
        urlPattern: ({ url }) => url.origin === self.location.origin,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "same-origin-cache",
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
      },
    ],
  },
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  
  // Disable image optimization to avoid caching issues offline
  // Images will load directly from public folder
  images: {
    unoptimized: true,
  },
};

export default withPWA(nextConfig);