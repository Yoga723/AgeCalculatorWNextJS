/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,css,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,css,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,css,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          500: "#FF6363;",
          800: "#FF1313;",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
      },
    },
  },
  plugins: [],
};
