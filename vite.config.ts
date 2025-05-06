import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Example: Split vendor libraries
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size limit (in kB)
  },
}));
// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom'], // Example: Split vendor libraries
//         },
//       },
//     },
//     chunkSizeWarningLimit: 1000, // Adjust chunk size limit (in kB)
//   },
// });
