// TODO Cambiar la distribucion de los computadores del laboratorio de acuerdo a la configuracion actual.
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "#DBA901");
ctx.fillStyle = grd;
ctx.fill();
ctx.fillRect(550, 300, 50, 200);
ctx.fillRect(400, 300, 90, 200);
ctx.fillRect(280, 300, 50, 200);
ctx.fillRect(550, 265, 50, 5);