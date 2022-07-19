import { bodyColorTumbs, headColorTumbs } from '../../../constants/forms.js';
import { snakeColor } from '../../../constants/objects.js';

export function SetColor(color = null) {
  snakeColor.body =
    color?.body ??
    `
    rgb(${bodyColorTumbs[0].value},
        ${bodyColorTumbs[1].value},
        ${bodyColorTumbs[2].value})
   `;
  snakeColor.head =
    color?.head ??
    `
    rgb(${headColorTumbs[0].value},
        ${headColorTumbs[1].value},
        ${headColorTumbs[2].value})
   `;
}
