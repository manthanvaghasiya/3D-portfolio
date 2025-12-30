/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- CRITICAL: Enables manual toggle
  theme: {
    extend: {
      colors: {
        // We will define these CSS variables in index.css in the next steps,
        // but we register them here so Tailwind knows about them.
        bg: {
          main: 'var(--bg-main)',       // Dynamic Background
          card: 'var(--bg-card)',       // Dynamic Card Surface
        },
        text: {
          main: 'var(--text-main)',     // Dynamic Text Color
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent-main)',
          glow: 'var(--accent-glow)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}