import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [alias(), react()],
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
});
