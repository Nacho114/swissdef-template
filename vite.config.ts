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
    noExternal: ['chart.js'], 
  },
  optimizeDeps: {
    exclude: ['chart.js'] 
  },
});
