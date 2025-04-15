const path = require("path");

module.exports = function (eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("src/images");

  // Custom collections
  eleventyConfig.addCollection("now", function (collectionApi) {
    return collectionApi.getFilteredByTag("now").reverse();
  });

  eleventyConfig.addCollection("note", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("case", function (collectionApi) {
    return collectionApi.getFilteredByTag("case").sort((a, b) => b.date - a.date);
  });

  // Custom filters
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return "";
    return content
      .replace(/(<([^>]+)>)/gi, "") // remove HTML tags
      .split(" ")
      .slice(0, 30)
      .join(" ") + "…";
  });

  eleventyConfig.addFilter("absoluteUrl", function (url, base) {
    try {
      return new URL(url, base).toString();
    } catch {
      return url;
    }
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
