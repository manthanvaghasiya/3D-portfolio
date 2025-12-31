/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- CRITICAL: Enables manual toggle
  theme: {
    // 1. EXTEND SCREENS for Universal Responsiveness
    screens: {
      'xs': '375px', // Small Mobile
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // 4K Screens
    },
    extend: {
      colors: {
        bg: {
          main: 'var(--bg-main)',
          card: 'var(--bg-card)',
        },
        text: {
          main: 'var(--text-main)',
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
      // 2. FLUID TYPOGRAPHY (Clamp Functions)
      fontSize: {
        // "Set and forget" sizes that scale with viewport width
        'fluid-h1': ['clamp(2.5rem, 5vw + 1rem, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-h2': ['clamp(2rem, 4vw + 1rem, 3.5rem)', { lineHeight: '1.2' }],
        'fluid-p': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6' }],
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