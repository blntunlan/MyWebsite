import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project Pages deployment at https://blntunlan.github.io/MyWebsite/
const repositoryName = 'MyWebsite';
const isCI = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  base: isCI ? `/${repositoryName}/` : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
