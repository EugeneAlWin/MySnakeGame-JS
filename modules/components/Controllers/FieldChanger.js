let MapSize;
const canvasStyle = document.getElementById('canvas').style;
const massRadio = [...document.forms.changeMap.map];
document.addEventListener('DOMContentLoaded', () => {
  canvasStyle.background = localStorage.getItem('Map') ?? 'green';
  switch (canvasStyle.background) {
    case 'green':
      massRadio[0].checked = true;
      break;
    case 'url("./resources/img/555555.jpg")':
      massRadio[1].checked = true;
      break;
  }
  canvasStyle.backgroundSize = localStorage.getItem('MapSize') ?? '';
});
export default function FieldChanger() {
  MapSize = localStorage.getItem('MapSize');
  massRadio.forEach((elem) => {
    elem.addEventListener('change', async () => {
      switch (elem.value) {
        case 'grass':
          canvasStyle.background = 'url("./resources/img/555555.jpg")';
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
