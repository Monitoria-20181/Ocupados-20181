//Computadores del B0
var b0computers =
    [
        {"bl1": {"posX": 640, "posY": 30}},
        {"bl2": {"posX": 640, "posY": 70}},
        {"bl3": {"posX": 660, "posY": 100}},
        {"bl4": {"posX": 680, "posY": 70}},
        {"bl5": {"posX": 680, "posY": 30}},
        {"bl6": {"posX": 740, "posY": 30}},
        {"bl7": {"posX": 740, "posY": 70}},
        {"bl8": {"posX": 760, "posY": 100}},
        {"bl9": {"posX": 780, "posY": 70}},
        {"bl10": {"posX": 780, "posY": 30}},
        {"bl11": {"posX": 840, "posY": 30}},
        {"bl12": {"posX": 840, "posY": 70}},
        {"bl13": {"posX": 860, "posY": 100}},
        {"bl14": {"posX": 880, "posY": 70}},
        {"bl15": {"posX": 880, "posY": 30}},
        {"bl16": {"posX": 940, "posY": 30}},
        {"bl17": {"posX": 940, "posY": 70}},
        {"bl18": {"posX": 960, "posY": 100}},
        {"bl19": {"posX": 980, "posY": 70}},
        {"bl20": {"posX": 980, "posY": 30}},
        {"bl21": {"posX": 960, "posY": 160}},
        {"bl22": {"posX": 920, "posY": 160}},
        {"bl23": {"posX": 890, "posY": 180}},
        {"bl24": {"posX": 960, "posY": 200}},
        {"bl25": {"posX": 920, "posY": 200}}
    ];

var c = document.getElementById("myCanvas");

for(var i = 0; i < b0computers.length; i++){
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(b0computers[i]['bl' + (i + 1)].posX, b0computers[i]['bl' + (i + 1)].posY, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.stroke();
}