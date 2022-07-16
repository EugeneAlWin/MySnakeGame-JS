import gulp from 'gulp';
import { buildDir, resourceDir } from '../config/path.js';
const { src, dest } = gulp;
import browserSync from 'browser-sync';

export const resources = () => {
  return src(`${resourceDir}**/*`)
    .pipe(dest(`${buildDir}resources/`))
    .pipe(browserSync.stream());
};
