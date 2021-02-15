// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const md = markdownIt({ html: true }).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addWatchTarget("tmp/styles/main.css");
  eleventyConfig.addPassthroughCopy({ "tmp/styles": "styles" });

  return {
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      output: "dist",
      data: "data",
    },
    markdownTemplateEngine: 'ejs',
  };
};