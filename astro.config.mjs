// @ts-check
import { defineConfig } from 'astro/config';
import {astroImageTools} from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
    output: 'server',
    integrations: [astroImageTools]
});
