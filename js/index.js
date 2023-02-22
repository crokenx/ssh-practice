let jugador = 0;

let pc = Math.floor(Math.random()*(3 - 1 + 1) + 1);
alert('aleatorio perra picha ' + pc)

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + 1); 
}

alert('return ' + random(1, 3));

jugador = prompt('1 piedra, 2 papel, 3 tijera');

// alert('elegiste ' + jugador);
switch (jugador) {
  case "1":
    alert(`piedra`);
  break;
  case '2':
    alert('papel');
  break;
  case '3':
    alert('tijera');
  break;
  default:
    alert('no elegiste nada caremonda');
}

switch (pc) {
  case "1":
    alert(`piedra`);
  break;
  case '2':
    alert('papel');
  break;
  case '3':
    alert('tijera');
  break;
  default:
    alert('no elegiste nada caremonda');
}

if(pc === jugador){
  alert('Empate')
}
