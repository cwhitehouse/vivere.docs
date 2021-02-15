const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    'src/**/*.html',
    'src/**/*.js',
    'src/**/*.ejs',
    'src/**/*.css',
  ],

  theme: {
    colors: {
      ...colors,
    },

    fontFamily: {
      sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      serif: ['IBM Plex Serif', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
  },

  variants: {
    extend: {
    },
  },

  plugins: [],
}
