import gulp from 'gulp';
import { clearAll, clearResources } from './gulp/tasks/clear.js';
const { src, watch, series, parallel, task } = gulp;
import { html } from './gulp/tasks/html.js';
import { js } from './gulp/tasks/js.js';
import { resources } from './gulp/tasks/resources.js';
import { scss } from './gulp/tasks/scss.js';
import BrowserSync from 'browser-sync';
import ghPages from 'gulp-gh-pages';
import {
  scssDir,
  buildDir,
  jsDir,
  resourceDir,
  htmlDir,
} from './gulp/config/path.js';

const browserSync = BrowserSync.create();
task('html', html);
task('scss', scss);
task('clearAll', clearAll);
task('clearResources', clearResources);
task('resources', resources);
task('js', js);
task('observer', () => {
  browserSync.init({
    server: {
      baseDir: `${buildDir}`,
    },
  });
  watch(`${htmlDir}`, series(html, parallel(scss, js)));
  watch(`${scssDir}**/*.scss`, scss);
  watch(`${jsDir}**/*.js`, js);
  watch(`${resourceDir}**/*`, series(clearResources, resources));
  watch(`${buildDir}**/*`).on('change', browserSync.reload);
});
task('dev', series(clearAll, html, scss, js, resources, 'observer'));
task('build', series(clearAll, html, scss, js, resources));
task(
  'deploy',
  series('build', () => {
    return src(`${buildDir}**/*`).pipe(
      ghPages({
        message: 'Update',
      })
    );
  })
);
