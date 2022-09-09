var arreglo = [1, 2, 3];
var divs = document.querySelectorAll('div');
var div = document.getElementById('uno');

divs.forEach(function(el) {
  el.addEventListener('click', function(evento) {
    if( evento.target.style.background == 'gray') {
      evento.target.style.background = 'plum';
    } else {
      evento.target.style.background = 'gray';
    }
  });
})
// document.body.addEventListener('mousemove', function(e) {
//   div.style.position = 'fixed';
//   div.style.top = e.clientY + 15 +'px';
//   div.style.left = e.clientX + 152+'px';
// })
document.body.addEventListener('click', function (e) {
    console.log(e.target);
})

