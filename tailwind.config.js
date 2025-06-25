/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'squaregame': ['"Square Game"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(0, 168, 149)',
          dark: 'rgb(0, 163, 82)',
        },
        accent: 'rgb(0, 255, 128)',
        dark: {
          DEFAULT: 'rgb(26, 26, 26)',
          secondary: 'rgb(38, 38, 38)',
          lighter: 'rgb(51, 51, 51)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to right, #1A1A1A, #262626)',
      },
    },
  },
  plugins: [],
} 