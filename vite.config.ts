import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
  plugins: [react()],
  build: {
    outDir: 'dist', // Pastikan output ke folder 'dist'
    rollupOptions: {
      output: {
        manualChunks: undefined, // Jika tidak ingin chunk manual
      },
    },
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable", // Cache-control header untuk assets
    },
  },
  // Jika kamu menggunakan sub-path atau deployment path lain di Vercel, misalnya: /my-app/
  base: '/',
});
