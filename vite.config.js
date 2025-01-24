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
        short_name: 'PWA',
        description: 'A React app with PWA capabilities',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'https://i.pinimg.com/736x/65/00/d6/6500d661d250321800aaa538d1c1171d.jpg',
            sizes: '192x192',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/65/00/d6/6500d661d250321800aaa538d1c1171d.jpg',
            sizes: '512x512',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/65/00/d6/6500d661d250321800aaa538d1c1171d.jpg',
            sizes: '512x512',
            type: 'image/jpg',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
