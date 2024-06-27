import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  define: {
    "process.env": {}
  },
  build: {
    lib: {
      entry: 'src/main.js',
      formats: ['es', 'cjs'],
      fileName: 'index',
    }
  },
  plugins: [
    vue(),
  ]
});