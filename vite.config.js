import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "vite-plugin-sitemap"; // Import the default export

const routes = [
  { path: "/", lastmod: new Date().toISOString() }, // Homepage
  { path: "/works", lastmod: new Date().toISOString() }, // My Works page
  { path: "/about", lastmod: new Date().toISOString() }, // About Me page
  { path: "/skills", lastmod: new Date().toISOString() }, // My Skills page
  // Add any other routes you have here
];

export default defineConfig({
  base: "/Ali-AbdElbagi/",
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      // Use it here as a function
      hostname: "https://ali007.github.io/Ali-AbdElbagi/",
      routes: routes,
    }),
  ],
});
