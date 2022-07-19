import { audioCheckboxToggler } from './audioCheckboxToggler.js';
import { toggleActiveWrapper } from './toggleActiveWrapper.js';

export function keyPressDispatcher(
  moveKeys,
  soundKeys,
  wrapKeys,
  e,
  worldInstance //'cuz keyPressDispatcher isn't binded to Interface
) {
  e.preventDefault();
  if (moveKeys) worldInstance.SwitchDirection(moveKeys[0]);
  else if (soundKeys) audioCheckboxToggler(soundKeys[0], true);
  else if (wrapKeys) toggleActiveWrapper(wrapKeys[0], true);
}
