import { bodyColorTumbs, headColorTumbs } from '../../constants/forms.js';
import { snakeColor } from '../../constants/objects.js';
export function InitColorChanger() {
  [...bodyColorTumbs, ...headColorTumbs].forEach((element) => {
    element.addEventListener('input', () => {
      snakeColor.body = `rgb(${bodyColorTumbs[0].value},${bodyColorTumbs[1].value},${bodyColorTumbs[2].value})`;
      snakeColor.head = `rgb(${headColorTumbs[0].value},${headColorTumbs[1].value},${headColorTumbs[2].value})`;
      this.worldInstance.snake.SetColor(snakeColor);
    });
    element.addEventListener('change', () => {
      const colors = {
        head: {
          red: headColorTumbs[0].value,
          green: headColorTumbs[1].value,
          blue: headColorTumbs[2].value,
        },
        body: {
          red: bodyColorTumbs[0].value,
          green: bodyColorTumbs[1].value,
          blue: bodyColorTumbs[2].value,
        },
      };
      localStorage.setItem('headTumbsColors', JSON.stringify(colors['head']));
      localStorage.setItem('TumbsColors', JSON.stringify(colors['body']));
    });
  });
}
