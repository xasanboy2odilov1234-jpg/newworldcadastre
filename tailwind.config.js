/**
 * Tailwind CSS v4 config.
 *
 * NOTE: as of Tailwind v4, theme customization (colors, shadows, fonts)
 * lives in `app/globals.css` via the `@theme` directive, not in this file.
 * This file is intentionally minimal — it exists only for editor tooling
 * and any future plugins that still expect a JS config to be present.
 *
 * Design tokens (premium navy/slate palette, gold accent, floating card
 * shadows) are defined and documented in `app/globals.css`.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
