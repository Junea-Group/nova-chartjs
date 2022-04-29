const mix = require("laravel-mix");

mix
  .setPublicPath("dist")
  .js("resources/js/chart-js-integration.js", "js")
  .vue();
// .js('resources/js/nova-apex-chart.js', 'js')
