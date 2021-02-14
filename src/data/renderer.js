module.exports = {
  minify: (content) => {
    return content.replace(/\n/g, "")
      .replace(/[\t ]+\</g, "<")
      .replace(/\>[\t ]+\</g, "><")
      .replace(/\>[\t ]+$/g, ">");
  },
};