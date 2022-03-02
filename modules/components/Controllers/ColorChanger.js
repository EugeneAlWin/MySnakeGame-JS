let massPlus = [...document.getElementsByClassName('plus')];
const canvasStyle = document.getElementById('canvas').style;
const standartSkinRadio = document.forms[0].standart;
let tumbs = document.forms[0].a;
let colors;
let snakeColor = {
  body: `rgb(${tumbs[0].value},${tumbs[1].value},${tumbs[2].value})`,
  head: 'yellow',
};
let StandartSkins = {
  standart1: { head: 'yellow', body: 'red' },
};

standartSkinRadio.addEventListener('change', () => {
  switch (standartSkinRadio.value) {
    case 'standart1':
      snakeColor.head = StandartSkins.standart1.head;
      snakeColor.body = StandartSkins.standart1.body;
      localStorage.setItem('HeadColor', snakeColor.head);
      localStorage.setItem('BodyColor', snakeColor.body);
      break;
  }
});
document.addEventListener('DOMContentLoaded', () => {
  canvasStyle.background = localStorage.getItem('Map');

  snakeColor.head = localStorage.getItem('HeadColor') ?? 'yellow';
  snakeColor.body =
    localStorage.getItem('BodyColor') ??
    `rgb(${tumbs[0].value},${tumbs[1].value},${tumbs[2].value})`;
  colors = JSON.parse(localStorage.getItem('TumbsColors'));
  tumbs[0].value = colors?.red ?? 240;
  tumbs[1].value = colors?.green ?? 0;
  tumbs[2].value = colors?.blue ?? 0;
});

tumbs.forEach((element) => {
  element.addEventListener('input', () => {
    snakeColor.body = `rgb(${tumbs[0].value},${tumbs[1].value},${tumbs[2].value})`;
    snakeColor.head = `rgb(${255 - tumbs[0].value},${255 - tumbs[1].value},${
      255 - tumbs[2].value
    })`;
  });
  element.addEventListener('change', async () => {
    localStorage.setItem('HeadColor', snakeColor.head);
    localStorage.setItem('BodyColor', snakeColor.body);
    colors = {
      red: tumbs[0].value,
      green: tumbs[1].value,
      blue: tumbs[2].value,
    };
    localStorage.setItem('TumbsColors', JSON.stringify(colors));
    standartSkinRadio.checked = false;
  });
});
export default function ColorChanger() {
  massPlus.forEach((element) => {
    element.addEventListener('click', (e) => {
      massPlus.forEach((elementt) => {
        switch (elementt) {
          case e.target:
            break;
          default:
            elementt.parentNode.nextElementSibling.classList.remove(
              'active_wrapper'
            );
            elementt.innerText = '+';
            break;
        }
      });
      let a = e.target.parentNode.nextElementSibling.classList;
      a.contains('active_wrapper')
        ? a.remove('active_wrapper')
        : a.add('active_wrapper');
      e.target.innerText = a.contains('active_wrapper') ? '-' : '+';
    });
  });
}

export { snakeColor };
