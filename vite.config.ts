import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
  plugins: [react()],
  build:{
    rollupOptions:{
      output:{
        manualChunks:undefined
      }
    }
  },
  server:{
    headers:{
      "Cache-Control" : "public, max-age=31536000, immutable",
    }
  }
})
