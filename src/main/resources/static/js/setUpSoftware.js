var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "#DBA901");
ctx.fillStyle = grd;
ctx.fill();
ctx.fillRect(635, 300, 30, 200);
ctx.fillRect(730, 300, 60, 200);
ctx.fillRect(850, 300, 60, 200);
ctx.fillRect(970, 300, 30, 200);
ctx.fillRect(635, 265, 40, 5);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "#00FF00";
for(var i = 0; i < labiswComputers.length; i++){
    console.log(labiswComputers[i]['sl'+(i+1)].posX + "------" + labiswComputers[i]['sl'+(i+1)].posY);
    ctx.beginPath();
    ctx.arc(labiswComputers[i]['sl'+(i+1)].posX, labiswComputers[i]['sl'+(i+1)].posY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    console.log(ctx.fillStyle);
}
ctx.fillStyle = "#00FF00";
ctx.fill();
ctx.stroke();