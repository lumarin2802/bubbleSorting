/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var palos = ["♦", "♥", "♠", "♣"];

  const numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "As"
  ];

  let todasCartas = [];

  for (let i = 1; i <= 5; i++) {
    let indexPalos = Math.floor(Math.random() * palos.length);
    let indexNumeros = Math.floor(Math.random() * numeros.length);
    //aca obtengo el palo
    console.log(palos[indexPalos]);
    //aca obtengo el numero
    console.log(numeros[indexNumeros]);
    //generamos la variable carta que es el array que tendra el conjunto de datos; palos y numeros
    let carta = [numeros[indexNumeros], palos[indexPalos]];
    console.log(carta);
    //llamamos al array y con push ingresamos cada conjunto de datos que se genera con iteracion
    todasCartas.push(carta);
    // console.log(todasCartas);

    if (palos[indexPalos] === "♥" || palos[indexPalos] === "♦") {
      document.body.innerHTML += `<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-danger" id="top">${palos[indexPalos]}</li>
      <li class="list-group-item text-danger" id="number">${numeros[indexNumeros]}</li>
      <li class="list-group-item text-danger" id="bottom">${palos[indexPalos]}</li>
    </ul>
  </div>`;
    } else {
      document.body.innerHTML += `<div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="top">${palos[indexPalos]}</li>
        <li class="list-group-item" id="number">${numeros[indexNumeros]}</li>
        <li class="list-group-item" id="bottom">${palos[indexPalos]}</li>
      </ul>
    </div>`;
    }
  }

  let wall = todasCartas.length - 1;

  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      let temp = todasCartas[index].slice(0, 1);
      let temp1 = todasCartas[index + 1].slice(0, 1);

      //let temp1 = arrCartas[index + 1][1];

      if (temp == "A") {
        temp = 1;
      } else if (temp == "J") {
        temp = 10;
      } else if (temp == "Q") {
        temp = 11;
      } else if (temp == "K") {
        temp = 12;
      }

      if (temp1 == "A") {
        temp1 = 1;
      } else if (temp1 == "J") {
        temp1 = 10;
      } else if (temp1 == "Q") {
        temp1 = 11;
      } else if (temp1 == "K") {
        temp1 = 12;
      }

      if (temp > temp1) {
        let aux = todasCartas[index];
        todasCartas[index] = todasCartas[index + 1];
        todasCartas[index + 1] = aux;
      }
      index++;
    }
    wall--;
    console.log(todasCartas);
  }

  // dibujarCartas(arrCartas);
  // return arrCartas;
};
