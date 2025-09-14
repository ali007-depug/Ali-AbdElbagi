import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { VitePluginSitemap } from 'vite-plugin-sitemap'; 

const routes = [
  { path: '/', lastmod: new Date().toISOString() },          // Homepage
  { path: '/works', lastmod: new Date().toISOString() },  // My Works page
  { path: '/about', lastmod: new Date().toISOString() },  // About Me page
  { path: '/skills', lastmod: new Date().toISOString() }, // My Skills page
  // Add any other routes you have here
];

export default defineConfig({
  base: "/Ali-AbdElbagi/",
  plugins: [react(), tailwindcss(), VitePluginSitemap({
    hostname: 'https://ali007.github.io/Ali-AbdElbagi/', 
    routes: routes, 
  }),],

  
});
