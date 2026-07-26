// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],

	fonts: [
		{
			provider: fontProviders.google(),
			name: "EB Garamond",
			cssVariable: "--font-eb",
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
