import { InitEventListeners } from './functions/initEventListeners.js';
import { InitOnLoad } from './functions/initOnLoad.js';
import { InitFormsWrapper } from './functions/initFormsWrapper.js';
import { InitKeyboardListener } from './functions/initKeyboardListener.js';
import { InitColorChanger } from './functions/initColorChanger.js';
import { InitSpeedChanger } from './functions/initSpeedChanger.js';
import { InitMapChanger } from './functions/initMapChanger.js';
import { InitSoundSwitcher } from './functions/initSoundSwitcher.js';
import { InitTouchListener } from './functions/initTouchListener.js';
import { InitDeathScreen } from './functions/initDeathScreen.js';

export default class Interface {
  constructor(worldInstance) {
    this.worldInstance = worldInstance;
    this.InitEventListeners = InitEventListeners;
    this.InitOnLoad = InitOnLoad;
    this.InitColorChanger = InitColorChanger;
    this.InitSpeedChanger = InitSpeedChanger;
    this.InitMapChanger = InitMapChanger;
    this.InitSoundSwitcher = InitSoundSwitcher;
    this.InitFormsWrapper = InitFormsWrapper;
    this.InitKeyboardListener = InitKeyboardListener;
    this.InitTouchListener = InitTouchListener;
    this.InitDeathScreen = InitDeathScreen;

    this.InitEventListeners();
  }
}
