/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  function ramdomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let indexPalo = Math.floor(Math.random() * palos.length);
    let indexNumero = Math.floor(Math.random() * numeros.length);

    console.log(palos[indexPalo], numeros[indexNumero]);

    let top = document.getElementById("top");
    let number = document.getElementById("number");
    let bottom = document.getElementById("bottom");

    for (let i = 1; i <= 3; i++) {
      document.body.innerHTML += `<div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="top">${palos[indexPalo]}</li>
        <li class="list-group-item" id="number">${numeros[indexNumero]}</li>
        <li class="list-group-item" id="bottom">${palos[indexPalo]}</li>
      </ul>
    </div>`;
    }
  }

  ramdomCard();

  let nombre = "Rosinni";

  console.log("Bienvenida " + nombre + " te estabamos esperando");

  console.log(`Bienvenida ${nombre} te estabamos esperando`);
};
