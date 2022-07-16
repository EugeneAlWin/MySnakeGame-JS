import del from 'del';
import gulp from 'gulp';
import { buildDir } from '../config/path.js';
const { src, dest } = gulp;

export const clearAll = () => {
  return del(buildDir);
};

export const clearResources = () => {
  return del(`${buildDir}resources`);
};
