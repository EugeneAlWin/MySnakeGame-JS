import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import { htmlDir, buildDir } from '../config/path.js';
const { src, dest } = gulp;

export const html = () => {
  return src(htmlDir)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(concat('index.html'))
    .pipe(dest(buildDir, { overwrite: true }))
    .pipe(browserSync.stream());
};
