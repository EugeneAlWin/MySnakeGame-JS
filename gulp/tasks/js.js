import gulp from 'gulp';
const { src, dest } = gulp;
import { htmlBuild, jsDir, buildDir } from '../config/path.js';
import webpackStream from 'webpack-stream';
import { isDev } from '../config/flags.js';
import replace from 'gulp-replace';
const regex = /<script.*<\/script>/s;
export const js = () => {
  return src(`${jsDir}index.js`)
    .pipe(
      webpackStream({
        mode: isDev ? 'development' : 'production',
        devtool: isDev ? 'inline-source-map' : undefined,
      })
    )
    .on('data', (data) => {
      src(htmlBuild)
        .pipe(replace(regex, `<script>${data._contents.toString()}</script>`))
        .pipe(dest(buildDir, { overwrite: true }));
      //.pipe(browserSync.stream());
    });
};
