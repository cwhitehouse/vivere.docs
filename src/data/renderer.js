const { dir } = require('console');
const fs = require('fs');

module.exports = {
  markdownSafe: (content) => {
    return content.replace(/(\n*```(.|\n)+?(?=```)```\n*)|(^[\t \n]+(?!```))/gm, "$1");
  },

  fileList: (directory) => {
    return fs.readdirSync(directory);
  },

  titleize: (string) => {
    return string.split('-').map(s => `${s[0].toUpperCase()}${s.slice(1)}`).join(' ');
  },

  upcase: (string) => {
      return string.split('-').join(' ').toUpperCase();
  },
};