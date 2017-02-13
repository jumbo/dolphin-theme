'use strict';

const mandelbrot = require('@frctl/mandelbrot');

/*
 * Configure the theme
 */
const subTheme = mandelbrot({
    skin: "fuchsia",
    styles: ['default', '/assets/mtheme.css']
});

/*
 * Specify a template directory to override any view templates
 */
subTheme.addLoadPath(__dirname + '/views');

/*
 * Specify the static assets directory that contains the custom stylesheet.
 */
subTheme.addStatic(__dirname + '/assets');

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = dolphinSubtheme;
