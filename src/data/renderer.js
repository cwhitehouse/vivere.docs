module.exports = {
  markdownSafe: (content) => {
    return content.replace(/(\n*```(.|\n)+?(?=```)```\n*)|(^[\t ]+)|(^\n)/gm, "$1");
  },
};