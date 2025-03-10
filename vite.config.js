import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/hoseo-bus-app/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.ico",
        "icons/favicon-16x16.png",
        "icons/favicon-32x32.png",
        "icons/icon-192x192.png",
        "icons/icon-512x512.png",
        "icons/apple-touch-icon.png",
        "icons/splash.png",
        "manifest.json",
      ],
      manifest: {
        name: "호서대 버스시간표",
        short_name: "호서버스",
        description:
          "호서대학교 셔틀 및 시내버스 정보를 제공하는 PWA 버스 시간표 앱",
        theme_color: "#A51622",
        background_color: "#A51622",
        display: "standalone",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/favicon-32x32.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/splash.png",
            sizes: "160x160",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "StaleWhileRevalidate",
          },
          {
            urlPattern: ({ request }) => request.destination === "script",
            handler: "NetworkFirst",
          },
          {
            urlPattern: ({ request }) => request.destination === "style",
            handler: "CacheFirst",
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
          },
          {
            urlPattern: ({ request }) => request.url.endsWith("manifest.json"),
            handler: "StaleWhileRevalidate",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
