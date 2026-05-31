/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        night: "#050713",
        ink: "#080b19",
        electric: "#38bdf8",
        violet: "#8b5cf6",
        plasma: "#d946ef",
      },
      boxShadow: {
        glow: "0 0 60px rgba(56, 189, 248, 0.25)",
        violet: "0 0 70px rgba(139, 92, 246, 0.28)",
      },
      backgroundImage: {
        "premium-radial":
          "radial-gradient(circle at 20% 20%, rgba(56,189,248,.24), transparent 28rem), radial-gradient(circle at 82% 12%, rgba(139,92,246,.24), transparent 28rem), radial-gradient(circle at 50% 90%, rgba(217,70,239,.12), transparent 24rem)",
      },
    },
  },
  plugins: [],
};
