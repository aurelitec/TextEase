const isProduction = process.env.ELEVENTY_ENV == 'production';

module.exports = {
  url: isProduction ? 'https://textease.aurelitec.com' : 'http://localhost:8080',
  // imagesUrl: isProduction ? 'https://static.aurelitec.com/images' : 'http://localhost:8000/images',
  buildYear: new Date().getFullYear(),
  isProduction,
};