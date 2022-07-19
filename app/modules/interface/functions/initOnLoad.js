import {
  bodyColorTumbs,
  headColorTumbs,
  mapChangeRadios,
  speedTumb,
  soundSwitcher,
} from '../../constants/forms.js';
import { bestScore, canvas } from '../../constants/containers.js';
import { toggleAudioCheckbox } from '../helpers/toggleAudioCheckbox.js';
import { speedLimit } from '../../constants/values.js';
export function InitOnLoad() {
  document.addEventListener('DOMContentLoaded', () => {
    bestScore.innerText = `Лучший счёт: ${localStorage.getItem('prev') || 0}`;
    //set snake color
    const bodyColor = JSON.parse(localStorage.getItem('TumbsColors')),
      headColor = JSON.parse(localStorage.getItem('headTumbsColors')),
      canvasBackground = (canvas.style.background =
        localStorage.getItem('Map') ?? '#008000');
    bodyColorTumbs[0].value = bodyColor?.red ?? 240;
    bodyColorTumbs[1].value = bodyColor?.green ?? 0;
    bodyColorTumbs[2].value = bodyColor?.blue ?? 0;
    headColorTumbs[0].value = headColor?.red ?? 255;
    headColorTumbs[1].value = headColor?.green ?? 255;
    headColorTumbs[2].value = headColor?.blue ?? 0;

    this.worldInstance.snake.SetColor({
      body: `rgb(${bodyColorTumbs[0].value},${bodyColorTumbs[1].value},${bodyColorTumbs[2].value})`,
      head: `rgb(${headColorTumbs[0].value},${headColorTumbs[1].value},${headColorTumbs[2].value})`,
    });

    //set speed
    speedTumb.value = localStorage.getItem('Speed') ?? '200';
    this.worldInstance.ResetInterval(speedLimit - +speedTumb.value);

    //set map
    mapChangeRadios.forEach((r) => {
      r.checked = canvasBackground.includes(r.value);
    });

    //set sound switcher
    const obj = JSON.parse(localStorage.getItem('SoundSwitchers'));
    if (obj) {
      soundSwitcher.forEach((item) => {
        item.checked = obj[item.id];
        item.checked ? item.classList.add('on') : item.classList.remove('on');
        toggleAudioCheckbox(item);
      });
    }
  });
}
