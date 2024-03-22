import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
    }),
  ],
  ssr: {
    noExternal: ['chart.js/auto'], 
  },
  optimizeDeps: {
    exclude: ['chart.js'] 
  },
  build: {
    rollupOptions: {
      external: ['chart.js/auto'] 
  },
});