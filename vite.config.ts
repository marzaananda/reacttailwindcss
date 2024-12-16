import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // Tambahkan plugin static copy

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/img', // Folder sumber gambar di public/img
          dest: 'img',       // Tujuan di dalam dist/img
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist', // Output ke folder 'dist'
    rollupOptions: {
      output: {
        manualChunks: undefined, // Jika tidak ingin chunk manual
      },
    },
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable", // Header cache-control untuk aset
    },
  },
  base: '/', // Base URL di Vercel (root)
});
