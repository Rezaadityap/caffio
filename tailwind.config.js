/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f2550",
        secondary: "#f4c01b",
        background: "#e4e4e4",
      },
      backgroundImage: {
        "gradient-to-c": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
};
