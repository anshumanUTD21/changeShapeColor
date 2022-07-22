import "./styles.css";

let color = [
  "#e63946",
  "#bde0fe",
  "#ffafcc",
  "#ffc8dd",
  "#cdb4db",
  "#264653",
  "#2a9d8f",
  "#e9c46a",
  "#f4a261",
  "#e76f51"
];

var shapeType = [
  "square",
  "rectangle",
  "circle",
  "oval",
  "triangle-up",
  "triangle-down",
  "triangle-topleft",
  "triangle-bottomleft",
  "triangle-bottomright",
  "triangle-right"
];

let boxEl = document.getElementById("box");
let pickedShapeEl = document.getElementById("square");
let colorEl = document.getElementById("color");
let shapeEl = document.getElementById("shape");

pickedShapeEl.setAttribute("id", "square");

colorEl.addEventListener("click", function () {
  let randomCol = color[Math.floor(Math.random() * color.length)];
  boxEl.style.backgroundColor = randomCol;
});

shapeEl.addEventListener("click", function () {
  let randomShapeType = shapeType[Math.floor(Math.random() * shapeType.length)];
  pickedShapeEl.setAttribute("id", randomShapeType);
});
