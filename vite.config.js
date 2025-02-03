import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['@tsparticles/react'],  // Ensure it's bundled properly
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
