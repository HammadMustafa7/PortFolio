import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Ensure this is correct for your deployment path
  plugins: [react()],
  optimizeDeps: {
    include: ['@tsparticles/react', 'react-router-dom'],  // Make sure this includes all necessary packages
  },
});
