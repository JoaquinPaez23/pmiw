//Joaquin paez95534/6
//https://youtu.be/cj59Gn8uGDw?si=o2622QHBDZYCZ_Vx
let imagenuno;
let cambioColor = false;

function preload() {
  // Carga la imagen antes de que se ejecute el sketch
  imagenuno = loadImage("https://i.ibb.co/tx87hy1/Imagen-de-Whats-App-2024-08-30-a-las-20-10-32-447d6011.jpg");
}

function setup() {
  createCanvas(800, 400);
  image(imagenuno, 0, 0, 400, 400);
}

function draw() {
  // Segundo cuadrado
  for (let x = 425; x < 800; x += 50) {
    for (let y = 0; y < 400; y += 50) {
      fill(miColor());
      rect(x, y, 25, 25);
    }
  }

  // Tercer cuadrado
  for (let x = 400; x < 800; x += 50) {
    for (let y = 25; y < 400; y += 50) {
      fill(cambioColor ? 255 : 0);
      rect(x, y, 25, 25);
      fill(miColor());
    }
  }

  for (let x = 0; x < width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      fill(0);
      drawTriangle1(x, y);
      drawTriangle2(x, y);
      drawTriangle3(x, y);
      drawTriangle4(x, y);
    }
  }
}

function drawTriangle1(x, y) {
  triangle(x + 400, y + 25, x + 425, y + 25, x + 425, y);
  fill(177);
}

function drawTriangle2(x, y) {
  triangle(x + 400, y + 25, x + 425, y, x + 400, y);
  fill(0);
}

function drawTriangle3(x, y) {
  triangle(x + 425, y + 25, x + 450, y + 25, x + 425, y + 50);
  fill(177);
}

function drawTriangle4(x, y) {
  triangle(x + 450, y + 50, x + 425, y + 50, x + 450, y + 25);
  fill(miColor());
}

function mousePressed() {
  cambioColor = !cambioColor;
}

function miColor() {
  return cambioColor ? color(0) : color(255);
}
