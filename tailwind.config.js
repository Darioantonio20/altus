/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00CC66',
          dark: '#00994D',
          light: '#33FF99',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          secondary: '#262626',
          lighter: '#333333',
        },
        accent: {
          DEFAULT: '#00FF80',
          dark: '#00CC66',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to right, #1A1A1A, #262626)',
      },
    },
  },
  plugins: [],
} 