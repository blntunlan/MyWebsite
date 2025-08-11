import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site repo (blntunlan.github.io) => root deployment
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
