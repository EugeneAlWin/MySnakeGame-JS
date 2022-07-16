import gulp from 'gulp';
const { src, dest } = gulp;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import { scssDir, htmlBuild, buildDir } from '../config/path.js';
import autoPrefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import replace from 'gulp-replace';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import { isDev, isProd } from '../config/flags.js';
const regex = /<style.*<\/style>/s;
export const scss = () => {
  return src(`${scssDir}*.scss`)
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpif(isDev, sourcemaps.write()))
    .pipe(
      gulpif(
        isProd,
        autoPrefixer({
          overrideBrowserslist: ['last 5 versions'],
        })
      )
    )
    .pipe(gulpif(isProd, csso()))
    .on('data', (data) => {
      src(htmlBuild)
        .pipe(replace(regex, `<style>${data._contents.toString()}</style>`))
        .pipe(dest(buildDir, { overwrite: true }));
      //  .pipe(browserSync.stream());
    });
};
