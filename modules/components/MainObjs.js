let Snake = [
  { posX: 60, posY: 0 },
  { posX: 30, posY: 0 },
  { posX: 0, posY: 0 },
];
let SnakeOnStart = JSON.stringify(Snake);
let Apple = {
  posX: 0,
  posY: 0,
};
let Thorns = [];

export { Snake, Apple, SnakeOnStart, Thorns };
