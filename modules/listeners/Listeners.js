export default class Listeners {
  constructor(props, SetSnakeColor, SetSnakeSpeed, SwitchSnakeDirection) {
    this.tumbsColors = JSON.parse(localStorage.getItem('TumbsColors'));
    this.headTumbsColors = JSON.parse(localStorage.getItem('headTumbsColors'));
    this.bgnd = canvas.style.background =
      localStorage.getItem('Map') ?? '#008000';
    this.snakeColor = {};
    this.limit = +props.speedTumb.max + +props.speedTumb.min;
    this.setPath = (picName) => `url("./resources/img/maps/${picName}")`;
    this.soundSwitcher = props.soundSwitcher;
    this.soundFull = [...props.soundSwitcher].filter(
      (e) => e.id === 'sound_full'
    )[0];
    this.formsPluses = props.formsPluses;
    this.wrappers = props.wrappers;
    this.SwitchSnakeDirection = SwitchSnakeDirection;
    this.keys = {
      keyh: 'sound_full',
      keyj: 'event',
      keyk: 'pickup',
      keyl: 'gameover',
    };
    this.initEventListeners(props, SetSnakeColor, SetSnakeSpeed);
  }
  /**
   * @description Initializes all event listeners
   * @param {object} props - object with all necessary properties
   * @param {function} SetSnakeColor - function to set snake color
   * @param {function} SetSnakeSpeed - function to set snake speed
   */
  initEventListeners(props, SetSnakeColor, SetSnakeSpeed) {
    this.initONLoad(props, SetSnakeColor, SetSnakeSpeed, this.soundSwitcher); //load forms' values
    this.initColorChanger(props, SetSnakeColor); //    //save & set colors' values
    this.initSpeedChanger(props, SetSnakeSpeed); //save & set speed's value
    this.initMapChanger(props); ////save & set map
    this.initSoundSwitcher(props); //sound switcher
    this.initFormsWrapper(props); //forms' wrapper
    this.initKeyboardListener(props); //keyboard listener
  }
  initONLoad(
    { bodyColorTumbs, headColorTumbs, speedTumb, mapChangeRadios, bestScore },
    SetSnakeColor,
    SetSnakeSpeed,
    soundSwitcher
  ) {
    document.addEventListener('DOMContentLoaded', () => {
      bestScore.innerText = `Лучший счёт: ${localStorage.getItem('prev') || 0}`;
      //set snake color
      bodyColorTumbs[0].value = this.tumbsColors?.red ?? 240;
      bodyColorTumbs[1].value = this.tumbsColors?.green ?? 0;
      bodyColorTumbs[2].value = this.tumbsColors?.blue ?? 0;
      headColorTumbs[0].value = this.headTumbsColors?.red ?? 255;
      headColorTumbs[1].value = this.headTumbsColors?.green ?? 255;
      headColorTumbs[2].value = this.headTumbsColors?.blue ?? 0;
      SetSnakeColor();

      //set speed
      speedTumb.value = localStorage.getItem('Speed') ?? '200';
      SetSnakeSpeed(this.limit - +speedTumb.value);

      //set map
      mapChangeRadios.forEach((r) => (r.checked = this.bgnd.includes(r.value)));

      //set sound switcher
      const obj = JSON.parse(localStorage.getItem('SoundSwitchers'));
      if (obj) {
        soundSwitcher.forEach((item) => {
          item.checked = obj[item.id];
          item.checked ? item.classList.add('on') : item.classList.remove('on');
          this.toggleCheckboxes(item);
        });
      }
    });
  }
  initColorChanger({ bodyColorTumbs, headColorTumbs }, SetSnakeColor) {
    [...bodyColorTumbs, ...headColorTumbs].forEach((element) => {
      element.addEventListener('input', () => {
        this.snakeColor.body = `rgb(${bodyColorTumbs[0].value},${bodyColorTumbs[1].value},${bodyColorTumbs[2].value})`;
        this.snakeColor.head = `rgb(${headColorTumbs[0].value},${headColorTumbs[1].value},${headColorTumbs[2].value})`;
        SetSnakeColor(this.snakeColor);
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
  initSpeedChanger({ speedTumb }, SetSnakeSpeed) {
    speedTumb.addEventListener('change', () => {
      SetSnakeSpeed(this.limit - +speedTumb.value);
      localStorage.setItem('Speed', speedTumb.value);
    });
  }
  initMapChanger({ mapChangeRadios, canvas }) {
    mapChangeRadios.forEach((elem) => {
      elem.addEventListener('change', () => {
        const val = elem.value,
          background = (canvas.style.background = val.includes('#')
            ? val
            : this.setPath(val));
        localStorage.setItem('Map', background);
      });
    });
  }

  initSoundSwitcher({ soundSwitcher }) {
    soundSwitcher.forEach((switcher) => {
      switcher.addEventListener('change', () =>
        this.checkboxToggler(switcher, false)
      );
    });
  }
  initFormsWrapper({ formsPluses }) {
    formsPluses.forEach((formPlus) => {
      formPlus.addEventListener('click', (e) => {
        this.toggleActive(e.target, false);
      });
    });
  }
  initKeyboardListener() {
    document.addEventListener('keydown', (e) => {
      let pressedKey = e.code.toLowerCase();
      const moveKeys =
        pressedKey.match(/key[w,a,s,d]/) ??
        pressedKey.match(/arrow(up|down|left|right)/) ??
        pressedKey.match(/space|enter/);
      const soundKeys = pressedKey.match(/key[h,j,k,l]/);
      const wrapKeys = pressedKey.match(/\$*[1-9]/);
      if (!(moveKeys ?? soundKeys ?? wrapKeys)) return;
      this.keyPressDispatcher(moveKeys, soundKeys, wrapKeys, e);
    });
  }
  //---------------------------------------------------------------------------------
  /**
   * @description The function toggles checkboxes. The first parameter is the checkbox itself or the key associated with the checkbox. If the first parameter is a key -- the second parameter is set to true
   * @param {object|string} switcherOrKey
   * @param {boolean} isByKey default false
   */
  checkboxToggler(switcherOrKey, isByKey = false) {
    let switcher = switcherOrKey;
    if (isByKey) {
      switcher = [...this.soundSwitcher].filter(
        (i) => i.id === this.keys[switcherOrKey]
      )[0];
      switcher.checked = !switcher.checked;
    }
    if (!this.soundFull.checked && switcher.value !== 'full') return;
    switcher.classList.toggle('on');
    let obj = {};
    this.soundSwitcher.forEach((item) => {
      obj[item.id] = item.checked;
      this.toggleCheckboxes(item);
    });
    localStorage.setItem('SoundSwitchers', JSON.stringify(obj));
  }
  /**
   * @description set checkbox in active or unactive state
   * @param {*} checkbox
   */
  toggleCheckboxes(checkbox) {
    if (!this.soundFull.checked && checkbox.value !== 'full') {
      checkbox.classList.add('disabled');
      checkbox.disabled = true;
    }
    if (this.soundFull.checked && checkbox.value !== 'full') {
      checkbox.classList.remove('disabled');
      checkbox.disabled = false;
    }
  }
  /**
   *@description Function toggles forms from active to inactive and back
   The first parameter accepts an html element if the event is a "click", or a key if the event is a "keydown". If the second, then the second argument must be true
    *@param {object|string} currentPlusOrKey html element .plus or key
    *@param {boolean} isByKey default false
   */
  toggleActive(currentPlusOrKey, isByKey = false) {
    let currentPlus = currentPlusOrKey;
    if (isByKey) {
      let key = +currentPlusOrKey;
      if (!(key >= 1 && key <= 9 && key <= this.wrappers.length)) return;
      currentPlus = this.formsPluses[--key];
    }
    const currWrapper = currentPlus.parentNode.nextElementSibling;
    const currWrapperClasses = currWrapper.classList;
    if (currWrapperClasses.contains('active')) {
      currWrapperClasses.remove('active');
      currentPlus.innerText = '+';
    } else {
      this.wrappers.forEach((wrapper) => wrapper.classList.remove('active'));
      this.formsPluses.forEach((formPlus) => (formPlus.innerText = '+'));
      currWrapperClasses.toggle('active');
      currentPlus.innerText = currentPlus.innerText === '+' ? '-' : '+';
    }
  }
  keyPressDispatcher(moveKeys, soundKeys, wrapKeys, e) {
    e.preventDefault();
    if (moveKeys) this.SwitchSnakeDirection(moveKeys[0]);
    else if (soundKeys) this.checkboxToggler(soundKeys[0], true);
    else if (wrapKeys) this.toggleActive(wrapKeys[0], true);
  }
}
