import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom domain (bulentunalan.dev) => always root path
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
