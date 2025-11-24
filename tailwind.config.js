/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Dark Slate (Text/Background)
        accent: '#2563EB',  // Electric Blue (Buttons/Links)
        light: '#F8FAFC',   // Off-white background
        dark: '#1E293B',    // Darker background for cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}