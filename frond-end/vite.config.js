// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5fad-45-160-147-223.ngrok-free.app'], // 👈 substitua pelo seu host ngrok atual
  },
});
