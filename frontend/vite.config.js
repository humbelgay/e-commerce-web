import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import react from "@vitejs/plugin-react";
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/auth/, ''),
       
      }
    }
  },
})