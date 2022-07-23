import { themeContainers } from '../../constants/theme_containers.js';

export function switchHUD(currentHUD, nextHUD) {
  themeContainers.forEach((e) => {
    e.className = e.className.replace(currentHUD, nextHUD);
  });
}
