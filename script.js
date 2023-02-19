var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var n = 10; // 10 шариков

// конструктор для шариков
var Ball = function () {
  this.x = 100;
  this.y = 100;
  this.xSpeed = Math.floor(Math.random() * 10);
  this.ySpeed = Math.floor(Math.random() * 10);
  ctx.fillStyle = ctx.clearRect(0, 0, width, height);
};

// функция рисования шарика
var circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

// рисование шарика заданным цветом
Ball.prototype.draw = function () {
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "blue";
  circle(this.x, this.y, 3, true);
};

// движение шарика
Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

// проверка столкновения шарика и стен - меняем движение на противоположное
Ball.prototype.checkCollision = function () {
//   console.log(ball.x, ball.y, ball.xSpeed, ball.ySpeed);
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }

  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
//   console.log(ball.x, ball.y, ball.xSpeed, ball.ySpeed);
};

// let ball = new Ball();
// console.log(ball.x, ball.y, ball.xSpeed, ball.ySpeed);
// ball.draw();

// рисуем n шариков
var balls = [];
for (var i = 0; i < n; i++) {
  balls[i] = new Ball();
}

// функция для отрисовки и перемещения шариков
var go = function () {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < 10; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
  }
  //ctx.strokeRect(0, 0, width, height);
};
setInterval(go, 30);
