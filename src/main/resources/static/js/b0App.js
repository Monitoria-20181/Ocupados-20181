var c = document.getElementById("myCanvas");

for(var i = 0; i < b0computers.length; i++){
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(b0computers[i]['bl' + (i + 1)].posX, b0computers[i]['bl' + (i + 1)].posY, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.stroke();
}