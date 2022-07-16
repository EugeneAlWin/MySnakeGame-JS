const props = {
  canvas: document.getElementById('canvas'),
  bodyColorTumbs: document.forms['bodyColorSwitcher'].bodyColorTumb,
  headColorTumbs: document.forms['headColorSwitcher'].headColorTumb,
  speedTumb: document.forms['speedSwitcher'].speedTumb,
  pauseContainer: document.getElementById('pause_container'),
  deathContainer: document.getElementById('death_container'),
  pauseClassList: document.getElementById('pause_container').classList,
  deathClassList: document.getElementById('death_container').classList,
  quotesContainer: document.querySelectorAll('.phrase'),
  scoreContainer: document.getElementById('counter'),
  lastScore: document.getElementById('last_count'),
  bestScore: document.getElementById('prev_counter'),
  soundSwitcher: document.forms.soundSwitcher['sound'],
  keyEventSound: new Audio(
    `./resources/sounds/${soundSwitcher['event'].value}`
  ),
  pickAppleSound: new Audio(
    `./resources/sounds/${soundSwitcher['pickup'].value}`
  ),
  deathSound: new Audio(
    `./resources/sounds/${soundSwitcher['gameover'].value}`
  ),
  formsPluses: [...document.getElementsByClassName('plus')],
  wrappers: [...document.getElementsByClassName('wrapper')],
  mapChangeRadios: [...document.forms.mapSwitcher.map],
  keyboardDiv: document.getElementsByClassName('forkeyboard'),
  screenDiv: document.getElementsByClassName('forscreen')[0],
};

const game = new Game(props);
new Listeners(
  props,
  () => Game.world.snake.SetColor(),
  (frequency) => Game.world.ReSetInterval(frequency),
  (key) => game.SwitchDirection(key)
);
