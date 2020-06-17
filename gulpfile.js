// Requis
const { src, dest, series, parallel, watch } = require('gulp');
const plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = 'public/less'; // dossier de travail
var destination = './public/'; // dossier à livrer

// Tâche "build" = LESS + autoprefixer + CSScomb + beautify (source -> destination)
function build () {
  return src(source + '/style.less')
    .pipe(plugins.less())
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(dest(destination + '/css/'));
}

function watchLess () {
	watch(source + '/*.less', build);
}

// Tâche "minify" = minification CSS (destination -> destination)
function minify () {
  return src(destination + '/css/*.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(dest(destination + '/css/'));
}

module.exports = {
	build,
	minify,
	default: build,
	build: build,
	prod: parallel(build,  minify),
	watch: watchLess,
};
