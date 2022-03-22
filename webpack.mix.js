const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public/js')
  .browserSync('ilmafood.test')
  .sass('resources/scss/app.scss', 'public/css')
  .purgeCss({
    safelist: [
      'fade',
      'show',
      'active',
      'carousel-item-end',
      'slide',
      'carousel-item-prev',
      'carousel-item-next',
      'carousel-item-start',
      'show-detail',
    ],
  })
  .webpackConfig({
    output: {
      chunkFilename: 'js/[name].js?id=[chunkhash]',
    },
  });
