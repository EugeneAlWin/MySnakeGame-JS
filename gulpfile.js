const { src, dest, watch, series, parallel } = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  del = require('del'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat'),
  csso = require('gulp-csso'),
  terser = require('gulp-terser'),
  replace = require('gulp-replace'),
  fs = require('fs'),
  deploy = require('gulp-gh-pages'),
  htmlmin = require('gulp-htmlmin');

function clearAll() {
  return del('build');
}
function html() {
  return src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(concat('index.html'))
    .pipe(dest('build/', { overwrite: true }))
    .pipe(browserSync.stream());
}
function prepareCSS() {
  return src('app/styles/*.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
      })
    )
    .pipe(csso())
    .pipe(concat('temp.css'))
    .pipe(dest('build/', { overwrite: true }));
}
//regexp for replace in index.html
function injectCSS() {
  //write regex that finds the <style> tag and replaces it with the content of the temp.css file

  return src('build/index.html')
    .pipe(
      replace(
        /<style>.*<\/style>/,
        '<style>' + fs.readFileSync('build/temp.css') + '</style>'
      )
    )
    .pipe(dest('build/', { overwrite: true }))
    .pipe(browserSync.stream());
}
function prepareJS() {
  return src(['app/modules/*/*.js', 'app/modules/index.js'])
    .pipe(concat('temp.js'))
    .pipe(terser({ toplevel: true }))
    .pipe(dest('build/'));
}
function injectJS() {
  return src('build/index.html')
    .pipe(
      replace(
        /<script>.*<\/script>/,
        '<script>' + fs.readFileSync('build/temp.js') + '</script>'
      )
    )
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
}

function resourses() {
  del('build/resources');
  return src('app/resources/**/*')
    .pipe(dest('build/resources'))
    .pipe(browserSync.stream());
}
function delTemp() {
  return del('build/**/temp.*');
}
function observer() {
  browserSync.init({
    server: {
      baseDir: 'build/',
    },
  });
  watch(
    'app/*.html',
    series(html, parallel(prepareCSS, prepareJS), injectCSS, injectJS)
  ).on('change', browserSync.reload);
  watch('app/styles/**/*.scss', series(prepareCSS, injectCSS, delTemp)).on(
    'change',
    browserSync.reload
  );
  watch('app/modules/**/*.js', series(prepareJS, injectJS, delTemp)).on(
    'change',
    browserSync.reload
  );
  watch('app/resources/**/*', resourses).on('change', browserSync.reload);
}
function deployToGit() {
  return src('build/**/*').pipe(deploy());
}
exports.build = series(
  clearAll,
  html,
  parallel(prepareCSS, prepareJS, resourses),
  injectCSS,
  injectJS,
  delTemp
);
exports.deploy = series(this.build, deployToGit);
exports.observer = series(this.build, observer);
