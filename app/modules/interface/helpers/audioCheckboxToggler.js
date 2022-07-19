import { soundFull } from '../../constants/audios.js';
import { soundSwitcher } from '../../constants/forms.js';
import { audioKeys } from '../../constants/keys.js';
import { toggleAudioCheckbox } from './toggleAudioCheckbox.js';

/**
 * @description The function toggles checkboxes. The first parameter is the checkbox itself or the key associated with the checkbox. If the first parameter is a key -- the second parameter is set to true
 * @param {object|string} switcherOrKey
 * @param {boolean} isByKey default false
 */
export const audioCheckboxToggler = (switcherOrKey, isByKey = false) => {
  let switcher = switcherOrKey;
  if (isByKey) {
    switcher = soundSwitcher.filter(
      (i) => i.id === audioKeys[switcherOrKey]
    )[0];
    switcher.checked = !switcher.checked;
  }
  if (!soundFull.checked && switcher.value !== 'full') return;
  switcher.classList.toggle('on');
  let obj = {};
  soundSwitcher.forEach((item) => {
    obj[item.id] = item.checked;
    toggleAudioCheckbox(item);
  });
  localStorage.setItem('SoundSwitchers', JSON.stringify(obj));
};
