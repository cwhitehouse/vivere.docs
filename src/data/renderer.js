const { dir } = require('console');
const fs = require('fs');

module.exports = {
  markdownSafe: (content) => {
    return content.replace(/(\n*```(.|\n)+?(?=```)```\n*)|(^[\t \n]+(?!```))/gm, "$1");
  },

  fileList: (directory) => {
    console.log();
    console.log('loading fileList...');
    console.log(directory);
    console.log('-');

    return fs.readdirSync(directory);
  }
};