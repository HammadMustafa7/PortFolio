import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortFolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'] // This is unlikely needed unless you're externally linking it
    }
  }
});
