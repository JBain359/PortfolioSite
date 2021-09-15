function drawBanner(p5) {
  const canvasHeight = 400;
  var originX = -window.innerWidth / 2;
  const originY = canvasHeight / -2;
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, canvasHeight, p5.WEBGL);
    p5.fill(0);
    p5.rect(originX, originY, window.innerWidth, p5.height);
  };

  const dots = [];
  var deleter = [];

  p5.draw = () => {
    originX = -window.innerWidth / 2;
    p5.resizeCanvas(window.innerWidth, canvasHeight);
    p5.fill(0, 20);
    p5.stroke(0);
    p5.rect(originX, originY, window.innerWidth, p5.height);
    p5.fill('#fff');

    const fireRate = 0.05;
    const dotSize = 15;
    const speed = 5;

    const pixel = '#ffa800';
    const web = '#3fd1b1';
    const game = '#da2c49';

    const colors = [pixel, web, game];

    if (p5.random(1) < fireRate) {
      dots.push(
        new Dot(
          originX,
          originY + p5.random(p5.height - dotSize),
          dotSize,
          speed,
          0,
          colors[p5.floor(p5.random(3))]
        )
      );
    }

    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      d.render();
      if (
        d.xPos - d.size > p5.width ||
        d.xPos < originX ||
        d.yPos + d.size < originY ||
        d.yPos > p5.height + d.size * 2
      ) {
        deleter.push(d);
      }
    }

    for (let i = 0; i < deleter.length; i++) {
      const d = deleter[i];
      const deleteIndex = dots.indexOf(d);
      if (deleteIndex > -1) {
        dots.splice(deleteIndex, 1);
      }
    }

    deleter = [];
  };

  class Dot {
    constructor(x, y, s, spx, spy, clr) {
      this.xPos = x;
      this.yPos = y;
      this.size = s;
      this.xSpeed = spx;
      this.ySpeed = spy;
      this.c = clr;
    }

    render() {
      p5.fill(this.c);
      p5.stroke(this.c);
      p5.rect(this.xPos, this.yPos, this.size, this.size);
      this.yPos += this.ySpeed;
      this.xPos += this.xSpeed;
      this.checkDirection();
    }

    checkDirection() {
      // Get midpoint of dot
      // check distance from mouse
      // change color
      this.myXPos = this.xPos + this.size / 2;
      this.myYPos = this.yPos + this.size / 2;

      this.inXBounds = false;
      this.inYBounds = false;
      if (p5.abs(this.myXPos - p5.mouseX - originX) <= this.size) {
        this.inXBounds = true;
      }
      if (p5.abs(this.myYPos - p5.mouseY - originY) <= this.size) {
        this.inYBounds = true;
      }

      if (this.inXBounds && this.inYBounds) {
        this.xSpeed = p5.random(-5, 5);
        this.ySpeed = p5.random(-5, 5);
        this.c = '#2CFF7A';
      }
    }
  }
}

export default drawBanner;
