let MapSize;
const canvasStyle = document.getElementById('canvas').style;
document.addEventListener('DOMContentLoaded', () => {
  canvasStyle.background = localStorage.getItem('Map') ?? 'green';
  canvasStyle.backgroundSize = localStorage.getItem('MapSize') ?? '';
});
const massRadio = [...document.forms.changeMap.map];
export default function FieldChanger() {
  MapSize = localStorage.getItem('MapSize');
  massRadio.forEach((elem) => {
    elem.addEventListener('change', async () => {
      switch (elem.value) {
        case 'standart':
          canvasStyle.background = 'url(../resources/img/555555.jpg)';
          localStorage.setItem('Map', canvasStyle.background);
          canvasStyle.backgroundSize = MapSize;
          localStorage.setItem('MapSize', canvasStyle.background);
          break;
        case 'minimal':
          canvasStyle.background = 'green';
          localStorage.setItem('Map', canvasStyle.background);
          break;
      }
    });
  });
}
