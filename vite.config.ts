/// <reference types="vitest" />
import { resolve } from 'path';

import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [
    alias(),
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 10086,
    open: true,
    cors: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
