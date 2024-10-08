/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Preahvihear", "sans-serif"],
      },
      fontSize: {
        base: ["20px", "1.5"],
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar")],
};
