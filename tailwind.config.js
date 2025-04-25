/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'laptopScreenHeight': { 'raw': '(max-height: 660px)' },
                // => @media (max-width: 1245px) { ... }
                'laptopL': { 'max': '1400px' },
  
                'laptopLarge': { 'max': '1460px' },
  
                'midLeve2': { 'max': '649px' },
  
                'laptop': { 'max': '1300px' },
  
                'midLevel': { 'max': '1150px' },
                'tablet': { 'max': '1020px' },
                // => @media (max-width: 1100px) { ... }
  
                'lgSmall': { 'max': '900px' },
                // => @media (max-width: 1100px) { ... }
  
                'lg': { 'max': '1200px' },
                // => @media (max-width: 1100px) { ... }
  
                'md': { 'max': '767px' },
                // => @media (max-width: 767px) { ... }
  
                'sm': { 'max': '495px' },
                // => @media (max-width: 495px) { ... }
  
                'vSm': { 'max': '320px' },
                // => @media (max-width: 320px) { ... }
            },
         
          //   colors: {
          //       primaryBg: "#FB8501",
          //       secondaryBg: "#1A1F71",
          //       primaryText: "#1A1F71",d
          //       secondaryText: "#27272E",
          //       error: "#FF2600",
          //       themeGreen: "#8FC980",
          //       lightGray: "#D8D8D8",
          //       darkGray: "#888888",
          //   },
            
        },
    },
    plugins: [],
  }