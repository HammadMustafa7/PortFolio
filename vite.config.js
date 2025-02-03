import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortFolio/', // Keep this if you need a custom base path
  plugins: [react()],
});
