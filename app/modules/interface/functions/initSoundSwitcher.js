import { soundSwitcher } from '../../constants/forms.js';
import { audioCheckboxToggler } from '../helpers/audioCheckboxToggler.js';

export function InitSoundSwitcher() {
  soundSwitcher.forEach((switcher) => {
    switcher.addEventListener('change', () =>
      audioCheckboxToggler(switcher, false)
    );
  });
}
