/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slide_down: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slide_down: 'slide_down 0.3s ease-in-out ',
      }
    },
  },
 
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.position-unset': {
          position: 'unset',
        },
      }

      addUtilities(newUtilities, ['responsive'])
    },
  ],
}

