const path = require("path");

module.exports = function (eleventyConfig) {
  // Pass-through copy for static files
  eleventyConfig.addPassthroughCopy("css");    
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("src/images");

  // Custom collections
  eleventyConfig.addCollection("now", function (collectionApi) {
    return collectionApi.getFilteredByTag("now").reverse(); // newest first
  });

  eleventyConfig.addCollection("note", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      includes: "_includes",
    },
  };
};
