const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    'src/**/*.html',
    'src/**/*.js',
    'src/**/*.ejs',
    'src/**/*.css',
  ],

  darkMode: 'class',

  theme: {
    colors: {
      ...colors,
      gray: colors.blueGray,
    },

    fontFamily: {
      sans: ['Rubik', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      display: ['Secular One', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
  },

  variants: {
    extend: {
      boxShadow: ['active'],
    },
  },

  plugins: [],
}
