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
        name: 'My Clock',
        short_name: 'Clock',
        description: 'A React app with PWA capabilities',
        theme_color: '#ffffff',
        "display": "standalone",
        
        icons: [
          {
            src: 'https://i.pinimg.com/736x/1a/86/91/1a8691c006f7bcea76fea15009c706a6.jpg',
            sizes: '192x192',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/1a/86/91/1a8691c006f7bcea76fea15009c706a6.jpg',
            sizes: '512x512',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/1a/86/91/1a8691c006f7bcea76fea15009c706a6.jpg',
            sizes: '512x512',
            type: 'image/jpg',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
