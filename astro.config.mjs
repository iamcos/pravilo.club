import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pravilo.club',
  output: 'static',
  build: {
    assets: 'assets'
  }
});