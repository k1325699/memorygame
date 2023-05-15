/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        desk: "#ab8159",
        mask: "rgba(73, 73, 73, 0.805)",
        button: "#160786",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotateY(0deg) rotate(30deg)" },
          "100%": { transform: "rotateY(360deg) rotate(30deg)" },
        },
      },
      animation: {
        spin: "spin 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
