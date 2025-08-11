import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Project Pages: served at https://<user>.github.io/<repo>/
// Use repository folder base during CI builds; keep '/' locally.
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
