/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Note: In v4, "theme" replaces "themes" from earlier examples
  theme: {
    extend: {
      // Your theme extensions if any
    },
  },
  plugins: [],
};
