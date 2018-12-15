var labiswComputers =
    [
        {"sl1": {"posX": 650, "posY": 330}},
        {"sl2": {"posX": 650, "posY": 380}},
        {"sl3": {"posX": 650, "posY": 430}},
        {"sl4": {"posX": 650, "posY": 480}},
        {"sl5": {"posX": 745, "posY": 330}},
        {"sl6": {"posX": 745, "posY": 380}},
        {"sl7": {"posX": 745, "posY": 430}},
        {"sl8": {"posX": 745, "posY": 480}},
        {"sl9": {"posX": 775, "posY": 330}},
        {"sl10": {"posX": 775, "posY": 380}},
        {"sl11": {"posX": 775, "posY": 430}},
        {"sl12": {"posX": 775, "posY": 480}},
        {"sl13": {"posX": 865, "posY": 330}},
        {"sl14": {"posX": 865, "posY": 380}},
        {"sl15": {"posX": 865, "posY": 430}},
        {"sl16": {"posX": 865, "posY": 480}},
        {"sl17": {"posX": 895, "posY": 330}},
        {"sl18": {"posX": 895, "posY": 380}},
        {"sl19": {"posX": 895, "posY": 430}},
        {"sl20": {"posX": 895, "posY": 480}},
        {"sl21": {"posX": 985, "posY": 330}},
        {"sl22": {"posX": 985, "posY": 380}},
        {"sl23": {"posX": 985, "posY": 430}},
        {"sl24": {"posX": 985, "posY": 480}}
    ];

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