// vite.config.ts
import { defineConfig } from "file:///C:/Users/Admin/Desktop/reactjsts/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Admin/Desktop/reactjsts/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/Users/Admin/Desktop/reactjsts/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg"],
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/img",
          // Folder sumber gambar di public/img
          dest: "img"
          // Tujuan di dalam dist/img
        }
      ]
    })
  ],
  build: {
    outDir: "dist",
    // Output ke folder 'dist'
    rollupOptions: {
      output: {
        manualChunks: void 0
        // Jika tidak ingin chunk manual
      }
    }
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable"
      // Header cache-control untuk aset
    }
  },
  base: "/"
  // Base URL di Vercel (root)
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXHJlYWN0anN0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5cXFxcRGVza3RvcFxcXFxyZWFjdGpzdHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FkbWluL0Rlc2t0b3AvcmVhY3Rqc3RzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7IC8vIFRhbWJhaGthbiBwbHVnaW4gc3RhdGljIGNvcHlcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5wbmcnLCAnKiovKi5qcGcnLCAnKiovKi5qcGVnJ10sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJ3B1YmxpYy9pbWcnLCAvLyBGb2xkZXIgc3VtYmVyIGdhbWJhciBkaSBwdWJsaWMvaW1nXG4gICAgICAgICAgZGVzdDogJ2ltZycsICAgICAgIC8vIFR1anVhbiBkaSBkYWxhbSBkaXN0L2ltZ1xuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JywgLy8gT3V0cHV0IGtlIGZvbGRlciAnZGlzdCdcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB1bmRlZmluZWQsIC8vIEppa2EgdGlkYWsgaW5naW4gY2h1bmsgbWFudWFsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcInB1YmxpYywgbWF4LWFnZT0zMTUzNjAwMCwgaW1tdXRhYmxlXCIsIC8vIEhlYWRlciBjYWNoZS1jb250cm9sIHVudHVrIGFzZXRcbiAgICB9LFxuICB9LFxuICBiYXNlOiAnLycsIC8vIEJhc2UgVVJMIGRpIFZlcmNlbCAocm9vdClcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0UixTQUFTLG9CQUFvQjtBQUN6VCxPQUFPLFdBQVc7QUFDbEIsU0FBUyxzQkFBc0I7QUFHL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsZUFBZSxDQUFDLFlBQVksWUFBWSxXQUFXO0FBQUEsRUFDbkQsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLEtBQUs7QUFBQTtBQUFBLFVBQ0wsTUFBTTtBQUFBO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLGlCQUFpQjtBQUFBO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
