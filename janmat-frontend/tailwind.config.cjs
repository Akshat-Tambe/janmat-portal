/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4ED8",
          hover: "#2563EB",
        },
        secondary: {
          DEFAULT: "#10B981",
          hover: "#059669",
        },
        accent: "#F59E0B",
        danger: "#EF4444",
        background: {
          light: "#F3F4F6",
          dark: "#111827",
        },
        text: {
          primary: "#111827",
          secondary: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        modal: "0 10px 25px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
