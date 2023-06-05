let bubbleSize = 20;

let bubble = []

function setup() {
  createCanvas(1432,575);

  for (let i = 0; i < 100; i++) {
    bubble[i] = {
      x: random(0, width),
      y: random(0, height),
      color: {
        r: (0),
        g: (0),
        b: (255)
      }
    };
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bubble.length; i++) {
    fill(bubble[i].color.r, bubble[i].color.g, bubble[i].color.b);

    circle(bubble[i].x, bubble[i].y, bubbleSize);

    bubble[i].x += random(-2, 2);
    bubble[i].y += random(-2, 2);
  }
}

function mouseClicked() {
  let newbubble = {
    x: mouseX,
    y: mouseY,
    color: {
      r: (0),
      g: (0),
      b: (255)
    }
  };
  bubble.push(newbubble)
}