let massPlus = [...document.getElementsByClassName('plus')];
let massRadio = [...document.forms.changeMap.map];
const canvasStyle = document.getElementById('canvas').style;
let MapSize;
document.addEventListener('DOMContentLoaded', () => {
  canvasStyle.background = localStorage.getItem('Map');
  MapSize = localStorage.getItem('MapSize');
});
export default function formController() {
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
