/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ayii: {
          // Primary Colors
          nude: '#F3D6D6',
          blush: '#EBC1C1',

          // Secondary Colors
          beige: '#EFE6DA',
          white: '#FAF9F7',

          // Accent Colors
          gold: '#C9A27E',
          taupe: '#9E8B7B',

          // Text Colors
          dark: '#4A3B35',
          text: '#7A7A7A',

          // Legacy aliases for compatibility
          pink: '#F3D6D6',
          overlay: 'rgba(74, 59, 53, 0.3)',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite',
        gradient: 'gradient 3s ease infinite',
      },
    },
  },
  plugins: [],
}
