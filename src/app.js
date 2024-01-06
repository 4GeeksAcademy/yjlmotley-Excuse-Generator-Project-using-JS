/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./index.html";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["A dog", "A stranger", "A cat", "The squirrel", "A crow"];
  let action = ["stole my", "grabbed my", "ripped my", "pooped on my"];
  let what = ["homework", "lunch money", "backpack", "hat"];
  let when = ["this morning!", "on the street!", "in the park!", "right outside the door!"];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
