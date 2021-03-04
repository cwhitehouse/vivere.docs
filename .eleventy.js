// docs: https://www.11ty.io/docs/config/
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(cacheBuster({
    outputDirectory: 'dist',
  }));

  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const md = markdownIt({ html: true }).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.setBrowserSyncConfig({
    // scripts in body conflict with Turbolinks
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match;
        }
      }
    }
  });

  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addWatchTarget("tmp/main.css");
  eleventyConfig.addWatchTarget("tmp/main.js");
  eleventyConfig.addPassthroughCopy({ "tmp": "." });

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
