module.exports = function (eleventyConfig) {
    // Pass-through copy for static files
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addCollection("note", function (collectionApi) {
      return collectionApi.getFilteredByTag("note").sort((a, b) => b.date - a.date);
    });
  
    return {
      dir: {
        includes: "_includes",
      },
    };
  };

  