import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  dotenv.config({ path: `./.env.${mode}` });
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [vue()],
      server: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
      preview: {
        port: 8080,
      },
      define: {
        // Expose environment variables to your Vue app
        'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
        'import.meta.env.VITE_API_URL_SERVICE1': JSON.stringify(process.env.VITE_API_URL_SERVICE1),
      },
      build: {
        // Add environment variables to the bundle
        force: true,
        rollupOptions: {
          external: ['@/store/auth'],
          output: {
            manualChunks: {
              env: ['dotenv'],
            },
          },
        },
      },
    }
  } else {
    // command === 'build'
    // Production build configuration
    return defineConfig({
      plugins: [vue()],
      resolve: {
        alias: {
          // atur alias agar Anda dapat mengimpor file SVG secara langsung
          '@svg': '/src/assets/icons/svg',
        },
      },
      // atur loader untuk SVG
      optimizeDeps: {
        include: ['@svg/*.svg'],
      },
      build: {
        // Your production-specific build settings
      },
    })
  }

})
