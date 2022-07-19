import { canvas } from '../../constants/containers.js';
import { mapChangeRadios } from '../../constants/forms.js';
import { pathToMap } from '../../constants/path.js';

export function InitMapChanger() {
  mapChangeRadios.forEach((elem) => {
    elem.addEventListener('change', () => {
      const val = elem.value,
        background = (canvas.style.background = val.includes('#')
          ? val
          : pathToMap(val));
      localStorage.setItem('Map', background);
    });
  });
}
