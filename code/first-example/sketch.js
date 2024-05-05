function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400, SVG);
}

function draw() {
  background(255,99,71);

  noStroke();
  fill(238,233,233);
  circle(200, 200, 300);

  fill(164,211,238);
  arc(
    200, 200,
    300, 300,
    Math.PI / 180 * -90,
    Math.PI / 180 * 90,
    CHORD
  );

  fill(30);
  circle(200, 200, 200);

  fill(255,215,0);
  arc(
    200, 200,
    200, 200,
    Math.PI / 180 * -90,
    Math.PI / 180 * 90,
    CHORD
  );

  fill('#ff8c69');
  arc(
    200, 200,
    100, 100,
    Math.PI / 180 * -90,
    Math.PI / 180 * 90,
    CHORD
  );
  noLoop();
}