module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('./images/olomouc-townhall.jpg')",
      }),
      colors: {
        'pepa-blue': 'rgb(3,1,51)'
      },
      dropShadow: {
        'custom-white': 'filter: drop-shadow(0 20px 13px rgb(255 2555 255 / 0.03)) drop-shadow(0 8px 5px rgb(255 2555 255 / 0.08));'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
