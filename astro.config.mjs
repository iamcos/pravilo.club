import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://iamcos.github.io',
  base: '/pravilo.club',
  output: 'static',
  build: {
    assets: 'assets'
  }
});