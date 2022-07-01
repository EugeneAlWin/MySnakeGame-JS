class Game {
  step = 30;
  dx = this.step;
  dy = 0;
  frequency = 300;
  timeStart = 0;
  isGamePaused = false;
  keys = {
    left: ['keya', 'arrowleft'],
    right: ['keyd', 'arrowright'],
    up: ['keyw', 'arrowup'],
    down: ['keys', 'arrowdown'],
    space: 'space',
    enter: 'enter',
  };
  static world;
  constructor(props) {
    this.keyEventSound = props.keyEventSound;
    this.InitGame(props);
  }
  InitGame(props) {
    Game.world = new World({
      ...props,
      step: this.step,
      dx: this.dx,
      dy: this.dy,
      frequency: this.frequency,
    });

    props.pauseContainer.addEventListener('click', () => {
      this.isGamePaused = !this.isGamePaused;
      Game.world.SetPlay();
    });
    props.deathContainer.addEventListener('click', () => {
      this.dy = 0; // must be before Game.world.snake.SetDirection()
      this.dx = this.step;
      Game.world.snake.SetDirection(this.dx, this.dy); // must be before snake.isDead = false
      Game.world.snake.isDead = false; // must be before Game.world.InitWorld()
      Game.world.deathClassList.remove('active');
      Game.world.InitWorld();
    });
  }
  SwitchDirection(key) {
    if (new Date() - this.timeStart < this.frequency - 100) return; //return if user pressed key too fast
    if (this.keys.left.indexOf(key) !== -1) {
      this.dx = -this.step;
      this.dy = 0;
    } else if (this.keys.right.indexOf(key) !== -1) {
      this.dx = this.step;
      this.dy = 0;
    } else if (this.keys.up.indexOf(key) !== -1) {
      this.dx = 0;
      this.dy = -this.step;
    } else if (this.keys.down.indexOf(key) !== -1) {
      this.dx = 0;
      this.dy = this.step;
    } else if (this.keys.space === key) {
      if (Game.world.snake.isDead) return;
      this.isGamePaused = !this.isGamePaused;
      this.isGamePaused ? Game.world.SetPause() : Game.world.SetPlay();
    } else if (this.keys.enter === key) {
      if (!Game.world.snake.isDead) return;
      this.dy = 0; // must be before Game.world.snake.SetDirection()
      this.dx = this.step;
      Game.world.snake.SetDirection(this.dx, this.dy); // must be before snake.isDead = false
      Game.world.snake.isDead = false; // must be before Game.world.InitWorld()
      Game.world.deathClassList.remove('active');
      Game.world.InitWorld();
    }
    Game.world.PlaySound(this.keyEventSound);
    Game.world.snake.SetDirection(this.dx, this.dy);
    this.timeStart = new Date();
  }
}
