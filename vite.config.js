import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My PWA App',
        short_name: 'Instragram0',
        description: 'A React app with PWA capabilities',
        theme_color: '#ffffff',
        "display": "standalone",
        
        icons: [
          {
            src: 'https://i.pinimg.com/736x/19/42/d5/1942d5deb0f788e6228054cd92767ff6.jpg',
            sizes: '192x192',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/19/42/d5/1942d5deb0f788e6228054cd92767ff6.jpg',
            sizes: '512x512',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/19/42/d5/1942d5deb0f788e6228054cd92767ff6.jpg',
            sizes: '512x512',
            type: 'image/jpg',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
