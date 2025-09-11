import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // SPA routing için tüm route'ları index.html'e yönlendir
    historyApiFallback: {
      index: '/index.html',
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/gonullu/, to: '/index.html' },
        { from: /^\/merch/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ],
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Production build için de gerekli
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
