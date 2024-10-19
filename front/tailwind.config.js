/** @type {import('tailwindcss').Config} */

  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      colors: {
        "black":"#000",
        "white":"",
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
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        theme: {
          screens: {
            'sm': '440px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px', 
            '2xl': '1536px',
          }
        },
        spacing: {
          '1': '8px',
          '2': '12px',
          '3': '16px',
          '4': '24px',
          '5': '32px',
          '6': '48px',
          '112': '28rem',
        '128': '32rem',
        },
        flexBasis: {
          '1/7': '14.2857143%',
          '2/7': '28.5714286%',
          '3/7': '42.8571429%',
          '4/7': '57.1428571%',
          '5/7': '71.4285714%',
          '6/7': '85.7142857%',
        }
      }
    },
  }
