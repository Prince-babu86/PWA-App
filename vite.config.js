import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA App',
        description: 'A React app with PWA capabilities',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/image.jpeg',
            sizes: '192x192',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/8e/2c/9a/8e2c9aba099fe0eac3583211fbd61e10.jpg',
            sizes: '512x512',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/8e/2c/9a/8e2c9aba099fe0eac3583211fbd61e10.jpg',
            sizes: '512x512',
            type: 'image/jpg',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
