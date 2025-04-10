module.exports = function (eleventyConfig) {
    // Pass-through copy for static files
    eleventyConfig.addPassthroughCopy("css");    
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addCollection("note", function (collectionApi) {
      return collectionApi.getFilteredByTag("note").sort((a, b) => b.date - a.date);
    });
  
    return {
      dir: {
        includes: "_includes",
      },
    };
  };

  const path = require("path");
  