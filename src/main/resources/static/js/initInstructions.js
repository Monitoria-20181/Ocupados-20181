var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(50, 230, 10, 0, 2 * Math.PI);
ctx.fillStyle = "#0F0";
ctx.fill();
ctx.stroke();
ctx.font = "20px Georgia";
ctx.fillText("Libre", 75, 235);
ctx.beginPath();
ctx.arc(200, 230, 10, 0, 2 * Math.PI);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.stroke();
ctx.font = "20px Georgia";
ctx.fillText("Ocupado", 230, 235);