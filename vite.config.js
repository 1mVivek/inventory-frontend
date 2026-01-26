import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/inventory-frontend/", // 🔥 VERY IMPORTANT for GitHub Pages
});
