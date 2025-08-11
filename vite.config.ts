import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// NOTE:
// For GitHub Project Pages the site is served at https://<user>.github.io/<repo>/
// so we set base to '/MyWebsite/' during CI builds (GITHUB_ACTIONS=true).
// Locally we keep base '/' for simplicity. If you later add a custom domain
// (CNAME) you can remove the conditional and set base: '/' always.
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
