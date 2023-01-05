/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //esta funcion genera UNA carta ramdom
  function ramdomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let indexPalo = Math.floor(Math.random() * palos.length);
    let indexNumero = Math.floor(Math.random() * numeros.length);

    console.log(palos[indexPalo], numeros[indexNumero]);
    //obteniendo elementos
    // let top = document.getElementById("top");
    // let number = document.getElementById("number");
    // let bottom = document.getElementById("bottom");

    //ingresar valores
    // top.innerHTML = palos[indexPalo];
    // number.innerHTML = numeros[indexNumero];
    // bottom.innerHTML = palos[indexPalo];

    //declaramos un array que tendra todas las cartas
    let todasCartas = [];

    for (let i = 1; i <= 5; i++) {
      let indexPalo = Math.floor(Math.random() * palos.length);
      let indexNumero = Math.floor(Math.random() * numeros.length);
      //aca obtengo el numero
      console.log(palos[indexPalo]);
      //aca obtengo el numero
      console.log(numeros[indexNumero]);
      //generamos la variable carta que es el array que tendra el conjuntode datos; palos y numeros
      let carta = [palos[indexPalo], numeros[indexNumero]];
      console.log(carta);
      //llamamos el array y con push ingresamos cada conjunto de datos que se genera con iteracion.

      todasCartas.push(carta);
      console.log(todasCartas);

      if (palos[indexPalo] === "♥" || palos[indexPalo] === "♦") {
        document.body.innerHTML += `<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-danger" id="top">${palos[indexPalo]}</li>
          <li class="list-group-item text-danger" id="number">${numeros[indexNumero]}</li>
          <li class="list-group-item text-danger" id="bottom">${palos[indexPalo]}</li>
        </ul>
      </div>`;
      } else {
        document.body.innerHTML += `<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="top">${palos[indexPalo]}</li>
          <li class="list-group-item" id="number">${numeros[indexNumero]}</li>
          <li class="list-group-item" id="bottom">${palos[indexPalo]}</li>
        </ul>
      </div>`;
      }
    }
    //
  }

  ramdomCard();
};
const bubbleSort = arr => {
  let wall = arr.length - 1; //iniciamos el wall o muro al final del array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //disminuir la pared para optimizar
  }
  console.log(bubbleSort());
  return arr;
};
