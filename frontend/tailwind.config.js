/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo shade for primary color
        secondary: "#06b6d4", // Cyan shade
        accent: "#f97316", // Orange accent
      },
    },
  },
  plugins: [],
};
