import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background-right': '#f8f8f8',
        'custom-background-dark': '#3b3b3b',
      },
    }
  },
  plugins: [],
  darkMode: "media"
};
export default config;
