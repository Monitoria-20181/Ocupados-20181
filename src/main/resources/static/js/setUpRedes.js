var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "#DBA901");
ctx.fillStyle = grd;
ctx.fill();
ctx.fillRect(0, 300, 50, 200);
ctx.fillRect(130, 300, 80, 200);
ctx.fillRect(230, 265, 50, 5);