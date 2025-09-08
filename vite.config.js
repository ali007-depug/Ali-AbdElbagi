import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/Ali-AbdElbagi/",
  plugins: [react(), tailwindcss(),visualizer({ open: true })],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // split vendors
        },
      },
    },
  },
});
