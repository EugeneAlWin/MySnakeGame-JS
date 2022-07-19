import { soundFull } from '../../constants/audios.js';
/**
 * @description set checkbox in active or unactive state
 * @param {*} checkbox
 */
export const toggleAudioCheckbox = (checkbox) => {
  if (!soundFull.checked && checkbox.value !== 'full') {
    checkbox.classList.add('disabled');
    checkbox.disabled = true;
  }
  if (soundFull.checked && checkbox.value !== 'full') {
    checkbox.classList.remove('disabled');
    checkbox.disabled = false;
  }
};
