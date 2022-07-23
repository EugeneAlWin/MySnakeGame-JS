import { keyboardDiv, screenDiv } from '../../constants/containers.js';
import { alertToRotate } from '../helpers/alertToRotate.js';
import { isMobileChecker } from '../helpers/isMobileChecker.js';

export function InitEventListeners() {
  this.InitOnLoad(); //load forms' values
  this.InitDeathScreen(); //load death screen
  this.InitColorChanger(); //save & set colors' values
  this.InitSpeedChanger(); //save & set speed's value
  this.InitMapChanger(); ////save & set map
  this.InitSoundSwitcher(); //sound switcher
  this.InitFormsWrapper(); //forms' wrapper
  this.InitHUDChanger(); //HUD switcher
  if (isMobileChecker()) {
    this.InitTouchListener(); //screen touch listener
    for (let i = 0; i < keyboardDiv.length; i++)
      keyboardDiv[i].style = 'display: none';
    screenDiv.style = 'display: block';
    if (window.innerWidth < window.innerHeight) alertToRotate();
  } else this.InitKeyboardListener(); //keyboard listener
}
