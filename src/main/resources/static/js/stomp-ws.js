/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Funciones de pantallas de informacion
 */
//Puesto de pantallas 1-->                        

var stompClient = null;

function setConnected(connected) {
    document.getElementById('connect').disabled = connected;
    document.getElementById('disconnect').disabled = !connected;
    document.getElementById('conversationDiv').style.visibility = connected ? 'visible' : 'hidden';
    document.getElementById('response').innerHTML = '';
}
var timer = setInterval(connect(), 10000);
function connect() {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        var strDate = Date().toString();
        var local = null;
        stompClient.send("/app/message", {}, JSON.stringify({'message': local}));
        stompClient.subscribe('/topic/messages', function (serverMessage) {
            showB0(JSON.parse(serverMessage.body).content);
        });
    });

}


function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}
function sendMessage() {
    var message = document.getElementById('message').value;

    for (i = 0; i < 5; i++) {
        stompClient.send("/app/message", {}, JSON.stringify({'message': message}));
    }
    stompClient.send("/app/message", {}, JSON.stringify({'message': message}));
}

function showB0(message) {
    //alert("entra function");
    var color = "#00FF00";
    var arregloDeCadenas = message.toString().split(",");
    for (var i = 0; i < b0computers.length; i++) {
        //alert("entra for "+'bl'+(i+1));
        if (arregloDeCadenas.includes('bl' + (i + 1))) {
            //  alert("entra if ");
            color = "#B40404";
        }
        else{
            color = "#00FF00";
        }
        var c1 = document.getElementById("myCanvas");
        var ctx1 = c1.getContext("2d");
        ctx1.beginPath();
        console.log(color);
        console.log(b0computers[i]['bl' + (i + 1)].posX);
        ctx1.arc(b0computers[i]['bl' + (i + 1)].posX, b0computers[i]['bl' + (i + 1)].posY, 8, 0, 2 * Math.PI);
        ctx1.fillStyle = color;
        ctx1.fill();
        ctx1.stroke();
    }

    color = "#00FF00";

    for (i = 0; i < labiswComputers.length; i++) {
        //alert("entra for "+'bl'+(i+1));
        if (arregloDeCadenas.includes('sl' + (i + 1))) {
            //  alert("entra if ");
            color = "#B40404";
        }
        else{
            color = "#00FF00";
        }
        var c1 = document.getElementById("myCanvas");
        var ctx1 = c1.getContext("2d");
        ctx1.beginPath();
        //console.log(color);
        //console.log(labiswComputers[i]['s' + (i + 1)].posX);
        ctx1.arc(labiswComputers[i]['sl' + (i + 1)].posX, labiswComputers[i]['sl' + (i + 1)].posY, 8, 0, 2 * Math.PI);
        ctx1.fillStyle = color;
        ctx1.fill();
        ctx1.stroke();
    }
    
    
    /*color = "#00FF00";

    for (i = 0; i < labpComputers.length; i++) {
        //alert("entra for "+'bl'+(i+1));
        if (arregloDeCadenas.includes('s' + (i + 1))) {
            //  alert("entra if ");
            color = "#B40404";
        }
        var c1 = document.getElementById("myCanvas");
        var ctx1 = c1.getContext("2d");
        ctx1.beginPath();
        //console.log(color);
        //console.log(labiswComputers[i]['s' + (i + 1)].posX);
        ctx1.arc(labiswComputers[i]['s' + (i + 1)].posX, labiswComputers[i]['s' + (i + 1)].posY, 8, 0, 2 * Math.PI);
        ctx1.fillStyle = color;
        ctx1.fill();
        ctx1.stroke();
    }*/
}


function showServerMessage(message) {

    console.log(message);
    var s = message;
    var arregloDeCadenas = s.toString().split(",");
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        console.log(arregloDeCadenas[i] + " espacio de cambio ");
    }

    // Laboratorio  de  PLATAFORMAS//

    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p1") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 320, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 320, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p2") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 360, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 360, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p3") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 400, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 400, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p4") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 440, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 440, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }

    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p5") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(310, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p6") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 320, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 320, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p7") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 350, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 350, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p8") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 380, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 380, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p9") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 410, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 410, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p10") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 440, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 440, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p11") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 470, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(420, 470, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p12") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 320, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 320, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p13") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 360, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 360, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p14") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 400, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 400, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p15") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 440, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 440, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p16") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(470, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p17") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 320, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 320, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p18") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 360, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 360, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p19") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 400, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 400, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p20") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 440, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 440, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "p21") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(570, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }




//  // Laboratorio  REDES


    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r1") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(20, 330, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(20, 330, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }

    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r2") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(20, 380, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(20, 380, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r3") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(20, 430, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(20, 430, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r4") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(20, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(20, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r8") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(150, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(150, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r7") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(150, 430, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(150, 430, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r6") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(150, 380, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(150, 380, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r5") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(150, 330, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(150, 330, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r9") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(190, 330, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(190, 330, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r10") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(190, 380, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(190, 380, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r11") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(190, 430, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(190, 430, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //prubafinaldehoy
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "r12") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(190, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(190, 480, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }



// Laboratorio  de MULTIMEDIA

    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m05") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(30, 30, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(30, 30, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m06") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(60, 30, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(60, 30, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m08") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(30, 70, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(30, 70, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m07") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(60, 70, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(60, 70, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m09") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(180, 30, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(180, 30, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m10") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(210, 30, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(210, 30, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m11") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(180, 70, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(180, 70, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m12") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(210, 70, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(210, 70, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m03") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(80, 130, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(80, 130, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m04") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(80, 160, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(80, 160, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m02") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(120, 130, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(120, 130, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }
    var cambio36 = 0;
    for (var i = 0; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i] === "m01") {
            console.log("entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(120, 160, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#B40404";
            ctx25.fill();
            ctx25.stroke();
            cambio36 = 10;
        }
        if (cambio36 === 0) {
            console.log(" NO  entra");
            var c25 = document.getElementById("myCanvas");
            var ctx25 = c25.getContext("2d");
            ctx25.beginPath();
            ctx25.arc(120, 160, 8, 0, 2 * Math.PI);
            ctx25.fillStyle = "#00FF00";
            ctx25.fill();
            ctx25.stroke();
            //final de pantallas
        }
    }










    var response = document.getElementById('response');
    var p = document.createElement('p');
    p.style.wordWrap = 'break-word';
    p.appendChild(document.createTextNode(message));
    response.appendChild(p);
}

/*
 function dividirCadena(cadenaADividir,separador) {
 var arregloDeCadenas = cadenaADividir.toString().split(separador);
 document.write('<p>La cadena original es: "' + cadenaADividir + '"');
 document.write('<br>El separador es: "' + separador + '"');
 document.write("<br>El arreglo tiene " + arregloDeCadenas.length + " elementos: ");
 
 for (var i=0; i < arregloDeCadenas.length; i++) {
 document.write(arregloDeCadenas[i] + " / ");
 }
 }*/


function init() {
    var btnSend = document.getElementById('send');

    btnSend.onclick = sendMessage;
    var btnConnect = document.getElementById('connect');
    btnConnect.onclick = connect;
    var btnDisconnect = document.getElementById('disconnect');
    btnDisconnect.onclick = disconnect;

    disconnect();
}

window.onload = init;
//onnect();
