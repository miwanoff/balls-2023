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
