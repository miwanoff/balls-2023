const canvas = document.getElementById("canvas");
const n = 10;

class Ball {
  constructor(canvas, x = 100, y = 100) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.x = x;
    this.y = x;
    this.xSpeed = Math.floor(Math.random() * 10);
    this.ySpeed = Math.floor(Math.random() * 10);
    this.color = "blue";
    //ctx.fillStyle = ctx.clearRect(0, 0, width, height);
  }

  circle(x, y, radius, fillCircle) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      this.ctx.fill();
    } else {
      this.ctx.stroke();
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.circle(this.x, this.y, 5, true);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkCollision() {
    if (this.x < 0 || this.x > this.width) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > this.height) {
      this.ySpeed = -this.ySpeed;
    }
  }
}
