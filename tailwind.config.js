/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(14, 165, 233, 0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(14, 165, 233, 0.6)' },
        },
          glowText: {
          '0%, 100%': { textShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(14, 165, 233, 0.4)' },
          '50%': { textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 15px rgba(14, 165, 233, 0.6)' },
        },
      },
      animation: {
        glow: 'glow 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
