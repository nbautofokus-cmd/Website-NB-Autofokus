import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nb-autofokus.de',
  // Pressefotografie entfernt – alte Galerie-URLs auf die Galerie umleiten (SEO)
  redirects: {
    '/galerie/pressefotografie-blaulicht': '/galerie',
    '/galerie/blaulicht-1': '/galerie',
  },
  build: {
    assets: 'assets',
    inlineStylesheets: 'always',
  },
});
