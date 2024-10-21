let mic;
let osc;
let audioStarted = false;

function setup() {
  createCanvas(500, 500);
  osc = new p5.Oscillator();
  osc.setType("sin");
  osc.freq(220);
  osc.amp(0.5);
  mic = new p5.AudioIn();

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Click to start/stop", width / 2, height / 2);
}

function draw() {
  if (audioStarted) {
    var micLevel = mic.getLevel();
    var sd = micLevel * 2000;
    fill(0, 10);
    rect(0, 0, width, height);

    osc.freq(map(mouseX, 0, width, 100, 1000));
    osc.amp(map(mouseY, 0, height, 0, 1));

    var radius = height * 0.3;
    var i = cos(radians(-sd)) * radius;
    var j = sin(radians(-sd)) * radius;

    stroke(random(0, 255), 120, 50);
    square(j + 250, i - 30, i - 60); //top left square

    var m = cos(radians(sd)) * radius;
    var n = sin(radians(sd)) * radius;

    stroke(random(0, 255), 200, 150);
    square(n + 250, m - 30, m - 60); // top right square

    stroke(random(0, 255), 120, 200);
    square(n + 200, m + 130, m - mouseX); // bottom square

    stroke(random(0, 255), 120, 150);
    square(n + 140, m - 130, m - 90); // bottom square

    var x = cos(radians(-sd)) * radius * 2;
    var y = sin(radians(sd)) * radius * 2;
    ellipse(x + 150, y + 120, x - 60, y + 50);
    //var x= cos(radians(-sd)) * radius;
    //var y= sin(radians(-sd)) * radius;

    translate(width / 2, width / 2, 250);
    stroke(random(0, 255), random(0, 255), random(0, 255));

    for (let i = 0; i < 100; i++) {
      ellipse(j + 150, 30, 0, 80);
      rotate(PI / 5);
    }
  }

  if (!audioStarted) {
    noStroke();
    fill(255, 255, 255, 200);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Click to start/stop", width / 2, height / 2);
  }
}

function mousePressed() {
  if (!audioStarted) {
    osc.start();
    mic.start();
    audioStarted = true;
    background(0);
  } else {
    osc.stop();
    mic.stop();
    audioStarted = false;
  }
}
