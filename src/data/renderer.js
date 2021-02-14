module.exports = {
  compress: (content) => {
    return content.replace(/[\t ]+\</g, "<")
      .replace(/\>[\t ]+\</g, "><")
      .replace(/\>[\t ]+$/g, ">");
  },
};