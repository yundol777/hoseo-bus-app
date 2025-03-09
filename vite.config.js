import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
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
        "favicon-16x16.png",
        "favicon-32x32.png",
        "icon-192x192.png",
        "icon-512x512.png",
        "apple-touch-icon.png",
        "manifest.json",
      ],
      manifest: {
        name: "호서대 버스시간표",
        short_name: "호서버스",
        description:
          "호서대학교 셔틀 및 시내버스 정보를 제공하는 PWA 버스 시간표 앱",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/icon-192x192.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/favicon-32x32.png",
            sizes: "96x96",
            type: "image/png",
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
