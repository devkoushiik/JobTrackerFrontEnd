import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const API_URL = import.meta.VITE_API_BASE_URL;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: API_URL || "http://localhost:5100/api", // Default to local server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
