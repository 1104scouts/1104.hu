// @ts-check
import { defineConfig } from 'astro/config';
import {astroImageTools} from "astro-imagetools";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [astroImageTools],
  adapter: netlify()
});