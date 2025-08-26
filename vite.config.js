import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  base: "/stella-portfolio/",
  plugins: [react()],
  resolve: { alias: { "@": "/src" } },
});
