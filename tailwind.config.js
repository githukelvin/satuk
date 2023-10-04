/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*/*.{html,js,php}"],
  theme: {
    theme: {
       container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage:{
        "bodyImage" : "url('/assests/images/student Video.mp4')"
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
  },
  plugins: [],
}