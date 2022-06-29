module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets/js/app.js');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/apple-touch-icon.png');

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: '_site',
    }
  }
}