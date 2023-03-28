import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
// => use this for create a https server. Is necesary in phone camera
import basicSsl from '@vitejs/plugin-basic-ssl';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  ssr: {
    noExternal: ['styled-components', '@emotion/*'],
  },
  plugins: [basicSsl(), react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  test: {
    coverage: {
      provider: 'istanbul', // or 'c8'
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'happy-dom',
  },
});
