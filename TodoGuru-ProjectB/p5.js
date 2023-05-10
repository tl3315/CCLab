class DigitalClock {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  update() {
    this.hours = hour();
    this.minutes = minute();
    this.seconds = second();
  }

  display() {
    fill(255);
    textSize(200);
    textFont('ariel');
    textAlign(CENTER);
    text(`${nf(this.hours, 2)}:${nf(this.minutes, 2)}:${nf(this.seconds, 2)}`, this.x, this.y);
  }
}

let clock;

function setup() {
  createCanvas(800, 300);
  clock = new DigitalClock(width / 2, height / 2);
}

function draw() {
  clear();
  background(220, 1);
  clock.update();
  clock.display();
}
