/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      userSelect: {
        'none': 'none'
      },
      fontFamily: {
        'primary': 'Poppins'
      },
      backgroundImage: {
        'waves': "url('../src/assets/bg/31.webp')"
      },
      backgroundColor: {
        'transparent-white': 'rgba(255,255,255,.6)'
      },
      animation: {
        'appear-right': 'appear-right 1s both',
        'appear-bottom': 'appear-bottom 0.6s both',        
        'modal': 'modal 0.3s both'
      },       
      keyframes: {
        'appear-right': {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'none'}
        },
        'appear-bottom' : {
          '0%': {
            transform: 'translateY(5rem)',
            opacity: 0
          },
          '100%': {
            transform: 'none',
            opacity: 1

          }
        },
        'modal': {
          '0%': {
            margin:  '-1.5rem 0 0 0',
            opacity: 0
          },
          '100%': {
            margin: 0,
            opacity: 1
          }
        }
      }      
    },
  },
  plugins: [],
}

