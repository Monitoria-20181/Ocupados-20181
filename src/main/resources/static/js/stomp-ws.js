/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Funciones de pantallas de informacion
 */
  //Puesto de pantallas 1-->                        

var stompClient = null;

var b0computers =
	[
	{"bl1":{"posX":640,"posY":30}},
	{"bl2":{"posX":640,"posY":70}},
	{"bl3":{"posX":660,"posY":100}},
	{"bl4":{"posX":680,"posY":70}},
	{"bl5":{"posX":680,"posY":30}},
	{"bl6":{"posX":740,"posY":30}},
	{"bl7":{"posX":740,"posY":70}},
	{"bl8":{"posX":760,"posY":100}},
	{"bl9":{"posX":780,"posY":70}},
	{"bl10":{"posX":780,"posY":30}},
	{"bl11":{"posX":840,"posY":30}},
	{"bl12":{"posX":840,"posY":70}},
	{"bl13":{"posX":860,"posY":100}},
	{"bl14":{"posX":880,"posY":70}},
	{"bl15":{"posX":880,"posY":30}},
	{"bl16":{"posX":940,"posY":30}},
	{"bl17":{"posX":940,"posY":70}},
	{"bl18":{"posX":960,"posY":100}},
	{"bl19":{"posX":980,"posY":70}},
	{"bl20":{"posX":980,"posY":30}},
	{"bl21":{"posX":960,"posY":160}},
	{"bl22":{"posX":920,"posY":160}},	
	{"bl23":{"posX":890,"posY":180}},
	{"bl24":{"posX":960,"posY":200}},
	{"bl25":{"posX":920,"posY":200}}
	];
	
function setConnected(connected) {
    document.getElementById('connect').disabled = connected;
    document.getElementById('disconnect').disabled = !connected;
     document.getElementById('conversationDiv').style.visibility = connected ? 'visible' : 'hidden';
    document.getElementById('response').innerHTML = '';
}
var timer = setInterval("connect()", 10000);
function connect() {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame) {
		setConnected(true);
		console.log('Connected: ' + frame);
        var strDate = Date().toString();
		var local = null;
		stompClient.send("/app/message", {}, JSON.stringify({ 'message': local}));
		stompClient.subscribe('/topic/messages', function(serverMessage){
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
     
    for ( i= 0;i<5; i++){
         stompClient.send("/app/message", {}, JSON.stringify({ 'message': message }));
    }
    stompClient.send("/app/message", {}, JSON.stringify({ 'message': message }));
}

function showB0(message){
	//alert("entra function");
	var color="#00FF00";
	var arregloDeCadenas = message.toString().split(",");
	for (i=0;i< b0computers.length;i++){
		//alert("entra for "+'bl'+(i+1));
		if(arregloDeCadenas.includes('bl'+(i+1))){
          //  alert("entra if ");
			color="#B40404";
		}
		var c1 = document.getElementById("myCanvas");
        var ctx1 = c1.getContext("2d");
        ctx1.beginPath();
		console.log(color);
		console.log(b0computers[i]['bl'+(i+1)].posX);
        ctx1.arc(b0computers[i]['bl'+(i+1)].posX,b0computers[i]['bl'+(i+1)].posY,8,0,2*Math.PI);
		ctx1.fillStyle=color; 
		ctx1.fill(); 
        ctx1.stroke();
	}
}


function showServerMessage(message) {
    
    console.log(message);
    var s = message;
    var arregloDeCadenas = s.toString().split(",");
    for (var i=0; i < arregloDeCadenas.length; i++) {
		console.log(arregloDeCadenas[i] + " espacio de cambio ");
    } 
       // Laboratorio B0 //
    
            //computador1
            var cambio=0; 
            for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b1"){
                            console.log("entra");
                            var c1 = document.getElementById("myCanvas");
                            var ctx1 = c1.getContext("2d");
                            ctx1.beginPath();
                            ctx1.arc(640,30,8,0,2*Math.PI);
                            ctx1.fillStyle="#B40404"; 
                            ctx1.fill(); 
                            ctx1.stroke();
                            cambio=10;
                        } 
                        if(cambio === 0){
                            console.log(" NO  entra");
                            var c1 = document.getElementById("myCanvas");
                            var ctx1 = c1.getContext("2d");
                            ctx1.beginPath();
                            ctx1.arc(640,30,8,0,2*Math.PI);
                            ctx1.fillStyle="#00FF00";
                            ctx1.fill(); 
                            ctx1.stroke();
                        }
            }
            //computador2
             var cambio1=0;
             for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b2"){
                            console.log("entra");
                            var c2 = document.getElementById("myCanvas");
                            var ctx2 = c2.getContext("2d");
                            ctx2.beginPath();
                            ctx2.arc(640,70,8,0,2*Math.PI);
                            ctx2.fillStyle="#B40404";
                            ctx2.fill(); 
                            ctx2.stroke();
                            cambio1=10;
                        } 
                        if(cambio1 === 0){
                            console.log(" NO  entra");
                            var c2 = document.getElementById("myCanvas");
                            var ctx2 = c2.getContext("2d");
                            ctx2.beginPath();
                            ctx2.arc(640,70,8,0,2*Math.PI);
                            ctx2.fillStyle="#00FF00";
                            ctx2.fill(); 
                            ctx2.stroke();
                        }
            }
            //computador3
             var cambio2=0;
             for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b5"){
                            console.log("entra");
                            var c3 = document.getElementById("myCanvas");
                            var ctx3 = c3.getContext("2d");
                            ctx3.beginPath();
                            ctx3.arc(680,30,8,0,2*Math.PI);
                            ctx3.fillStyle="#B40404";
                            ctx3.fill(); 
                            ctx3.stroke();
                            cambio2=10;
                        } 
                        if(cambio2 === 0){
                            console.log(" NO  entra");
                            var c3 = document.getElementById("myCanvas");
                            var ctx3 = c3.getContext("2d");
                            ctx3.beginPath();
                            ctx3.arc(680,30,8,0,2*Math.PI);
                            ctx3.fillStyle="#00FF00";
                            ctx3.fill(); 
                            ctx3.stroke();
                        }
            }
            //computador4
             var cambio3=0;
             for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b4"){
                            console.log("entra");
                            var c4 = document.getElementById("myCanvas");
                            var ctx4 = c4.getContext("2d");
                            ctx4.beginPath();
                            ctx4.arc(680,70,8,0,2*Math.PI);
                            ctx4.fillStyle="#B40404";
                            ctx4.fill(); 
                            ctx4.stroke();
                            cambio3=10;
                        } 
                        if(cambio3 === 0){
                            console.log(" NO  entra");
                            var c4 = document.getElementById("myCanvas");
                            var ctx4 = c4.getContext("2d");
                            ctx4.beginPath();
                            ctx4.arc(680,70,8,0,2*Math.PI);
                            ctx4.fillStyle="#00FF00";
                            ctx4.fill(); 
                            ctx4.stroke();
                        }
            }
			//computador5
             var cambio4=0;
             for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b3"){
                            console.log("entra");
                            var c5 = document.getElementById("myCanvas");
                            var ctx5 = c5.getContext("2d");
                            ctx5.beginPath();
                            ctx5.arc(660,100,8,0,2*Math.PI);
                            ctx5.fillStyle="#B40404";
                            ctx5.fill(); 
                            ctx5.stroke();
                            cambio4=10;
                        } 
                        if(cambio4 === 0){
                            console.log(" NO  entra");
                            var c5 = document.getElementById("myCanvas");
                            var ctx5 = c5.getContext("2d");
                            ctx5.beginPath();
                             ctx5.arc(660,100,8,0,2*Math.PI);
                            ctx5.fillStyle="#00FF00";
                            ctx5.fill(); 
                            ctx5.stroke();
                            //prubafinaldehoy
                        }
            }
			//computador6
             var cambio5=0;
             for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b6"){
                            console.log("entra");
                            var c6 = document.getElementById("myCanvas");
                            var ctx6 = c6.getContext("2d");
                            ctx6.beginPath();
                            ctx6.arc(740,30,8,0,2*Math.PI);
                            ctx6.fillStyle="#B40404";
                            ctx6.fill(); 
                            ctx6.stroke();
                            cambio5=10;
                        } 
                        if(cambio5 === 0){
                            console.log(" NO  entra");
                            var c6 = document.getElementById("myCanvas");
                            var ctx6 = c6.getContext("2d");
                            ctx6.beginPath();
                            ctx6.arc(740,30,8,0,2*Math.PI);
                            ctx6.fillStyle="#00FF00";
                            ctx6.fill(); 
                            ctx6.stroke();
                            //prubafinaldehoy
                        }
            }
			//computador7
             var cambio6=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b7"){
                            console.log("entra");
                            var c7 = document.getElementById("myCanvas");
                            var ctx7 = c7.getContext("2d");
                            ctx7.beginPath();
                            ctx7.arc(740,70,8,0,2*Math.PI);
                            ctx7.fillStyle="#B40404";
                            ctx7.fill(); 
                            ctx7.stroke();
                            cambio6=10;
                        } 
                        if(cambio6 === 0){
                            console.log(" NO  entra");
                            var c7 = document.getElementById("myCanvas");
                            var ctx7 = c7.getContext("2d");
                            ctx7.beginPath();
                            ctx7.arc(740,70,8,0,2*Math.PI);
                            ctx7.fillStyle="#00FF00";
                            ctx7.fill(); 
                            ctx7.stroke();
                            //prubafinaldehoy
                        }
            }
			//computador8
               var cambio7=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b10"){
                            console.log("entra");
                            var c8 = document.getElementById("myCanvas");
                            var ctx8 = c8.getContext("2d");
                            ctx8.beginPath();
                            ctx8.arc(780,30,8,0,2*Math.PI);
                            ctx8.fillStyle="#B40404";
                            ctx8.fill(); 
                            ctx8.stroke();
                            cambio7=10;
                        } 
                        if(cambio7 === 0){
                            console.log(" NO  entra");
                            var c8 = document.getElementById("myCanvas");
                            var ctx8 = c8.getContext("2d");
                            ctx8.beginPath();
                            ctx8.arc(780,30,8,0,2*Math.PI);
                            ctx8.fillStyle="#00FF00";
                            ctx8.fill(); 
                            ctx8.stroke();
                            //prubafinaldehoy
                        }
            }
               var cambio8=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b9"){
                            console.log("entra");
                            var c9 = document.getElementById("myCanvas");
                            var ctx9 = c9.getContext("2d");
                            ctx9.beginPath();
                            ctx9.arc(780,70,8,0,2*Math.PI);
                            ctx9.fillStyle="#B40404";
                            ctx9.fill(); 
                            ctx9.stroke();
                            cambio8=10;
                        } 
                        if(cambio8 === 0){
                            console.log(" NO  entra");
                            var c9 = document.getElementById("myCanvas");
                            var ctx9 = c9.getContext("2d");
                            ctx9.beginPath();
                            ctx9.arc(780,70,8,0,2*Math.PI);
                            ctx9.fillStyle="#00FF00";
                            ctx9.fill(); 
                            ctx9.stroke();
                            //prubafinaldehoy
                        }
            }
               var cambio9=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b8"){
                            console.log("entra");
                            var c10 = document.getElementById("myCanvas");
                            var ctx10 = c10.getContext("2d");
                            ctx10.beginPath();
                            ctx10.arc(760,100,8,0,2*Math.PI);
                            ctx10.fillStyle="#B40404";
                            ctx10.fill(); 
                            ctx10.stroke();
                            cambio9=10;
                        } 
                        if(cambio9 === 0){
                            console.log(" NO  entra");
                            var c10 = document.getElementById("myCanvas");
                            var ctx10 = c10.getContext("2d");
                            ctx10.beginPath();
                            ctx10.arc(760,100,8,0,2*Math.PI);
                            ctx10.fillStyle="#00FF00";
                            ctx10.fill(); 
                            ctx10.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio10=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b11"){
                            console.log("entra");
                            var c11 = document.getElementById("myCanvas");
                            var ctx11 = c11.getContext("2d");
                            ctx11.beginPath();
                            ctx11.arc(840,30,8,0,2*Math.PI);
                            ctx11.fillStyle="#B40404";
                            ctx11.fill(); 
                            ctx11.stroke();
                            cambio10=10;
                        } 
                        if(cambio10 === 0){
                            console.log(" NO  entra");
                            var c11 = document.getElementById("myCanvas");
                            var ctx11 = c11.getContext("2d");
                            ctx11.beginPath();
                            ctx11.arc(840,30,8,0,2*Math.PI);
                            ctx11.fillStyle="#00FF00";
                            ctx11.fill(); 
                            ctx11.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio11=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b12"){
                            console.log("entra");
                            var c12 = document.getElementById("myCanvas");
                            var ctx12 = c12.getContext("2d");
                            ctx12.beginPath();
                            ctx12.arc(840,70,8,0,2*Math.PI);
                            ctx12.fillStyle="#B40404";
                            ctx12.fill(); 
                            ctx12.stroke();
                            cambio11=10;
                        } 
                        if(cambio11 === 0){
                            console.log(" NO  entra");
                            var c12 = document.getElementById("myCanvas");
                            var ctx12 = c12.getContext("2d");
                            ctx12.beginPath();
                            ctx12.arc(840,70,8,0,2*Math.PI);
                            ctx12.fillStyle="#00FF00";
                            ctx12.fill(); 
                            ctx12.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio12=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b15"){
                            console.log("entra");
                            var c13 = document.getElementById("myCanvas");
                            var ctx13 = c13.getContext("2d");
                            ctx13.beginPath();
                           ctx13.arc(880,30,8,0,2*Math.PI);
                            ctx13.fillStyle="#B40404";
                            ctx13.fill(); 
                            ctx13.stroke();
                            cambio12=10;
                        } 
                        if(cambio12 === 0){
                            console.log(" NO  entra");
                            var c13 = document.getElementById("myCanvas");
                            var ctx13 = c13.getContext("2d");
                            ctx13.beginPath();
                           ctx13.arc(880,30,8,0,2*Math.PI);
                            ctx13.fillStyle="#00FF00";
                            ctx13.fill(); 
                            ctx13.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio13=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b14"){
                            console.log("entra");
                            var c14 = document.getElementById("myCanvas");
                            var ctx14 = c14.getContext("2d");
                            ctx14.beginPath();
                            ctx14.arc(880,70,8,0,2*Math.PI);
                            ctx14.fillStyle="#B40404";
                            ctx14.fill(); 
                            ctx14.stroke();
                            cambio13=10;
                        } 
                        if(cambio13 === 0){
                            console.log(" NO  entra");
                            var c14 = document.getElementById("myCanvas");
                            var ctx14 = c14.getContext("2d");
                            ctx14.beginPath();
                            ctx14.arc(880,70,8,0,2*Math.PI);
                            ctx14.fillStyle="#00FF00";
                            ctx14.fill(); 
                            ctx14.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio14=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b13"){
                            console.log("entra");
                            var c15 = document.getElementById("myCanvas");
                            var ctx15 = c15.getContext("2d");
                            ctx15.beginPath();
                            ctx15.arc(860,100,8,0,2*Math.PI);
                            ctx15.fillStyle="#B40404";
                            ctx15.fill(); 
                            ctx15.stroke();
                            cambio14=10;
                        } 
                        if(cambio14 === 0){
                            console.log(" NO  entra");
                            var c15 = document.getElementById("myCanvas");
                            var ctx15 = c15.getContext("2d");
                            ctx15.beginPath();
                            ctx15.arc(860,100,8,0,2*Math.PI);
                            ctx15.fillStyle="#00FF00";
                            ctx15.fill(); 
                            ctx15.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio15=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b16"){
                            console.log("entra");
                            var c16 = document.getElementById("myCanvas");
                            var ctx16 = c16.getContext("2d");
                            ctx16.beginPath();
                            ctx16.arc(940,30,8,0,2*Math.PI);
                            ctx16.fillStyle="#B40404";
                            ctx16.fill(); 
                            ctx16.stroke();
                            cambio15=10;
                        } 
                        if(cambio15 === 0){
                            console.log(" NO  entra");
                            var c16 = document.getElementById("myCanvas");
                            var ctx16 = c16.getContext("2d");
                            ctx16.beginPath();
                            ctx16.arc(940,30,8,0,2*Math.PI);
                            ctx16.fillStyle="#00FF00";
                            ctx16.fill(); 
                            ctx16.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio16=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b17"){
                            console.log("entra");
                            var c17 = document.getElementById("myCanvas");
                            var ctx17 = c17.getContext("2d");
                            ctx17.beginPath();
                           ctx17.arc(940,70,8,0,2*Math.PI);
                            ctx17.fillStyle="#B40404";
                            ctx17.fill(); 
                            ctx17.stroke();
                            cambio16=10;
                        } 
                        if(cambio16 === 0){
                            console.log(" NO  entra");
                            var c17 = document.getElementById("myCanvas");
                            var ctx17 = c17.getContext("2d");
                            ctx17.beginPath();
                            ctx17.arc(940,70,8,0,2*Math.PI);
                            ctx17.fillStyle="#00FF00";
                            ctx17.fill(); 
                            ctx17.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio17=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "bl20"){
                            console.log("entra");
                            var c18 = document.getElementById("myCanvas");
                            var ctx18 = c18.getContext("2d");
                            ctx18.beginPath();
                           ctx18.arc(980,30,8,0,2*Math.PI);
                            ctx18.fillStyle="#B40404";
                            ctx18.fill(); 
                            ctx18.stroke();
                            cambio17=10;
                        } 
                        if(cambio17 === 0){
                            console.log(" NO  entra");
                            var c18 = document.getElementById("myCanvas");
                            var ctx18 = c18.getContext("2d");
                            ctx18.beginPath();
                           ctx18.arc(980,30,8,0,2*Math.PI);
                            ctx18.fillStyle="#00FF00";
                            ctx18.fill(); 
                            ctx18.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio18=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b19"){
                            console.log("entra");
                            var c19 = document.getElementById("myCanvas");
                            var ctx19 = c19.getContext("2d");
                            ctx19.beginPath();
                           ctx19.arc(980,70,8,0,2*Math.PI);
                            ctx19.fillStyle="#B40404";
                            ctx19.fill(); 
                            ctx19.stroke();
                            cambio18=10;
                        } 
                        if(cambio18 === 0){
                            console.log(" NO  entra");
                            var c19 = document.getElementById("myCanvas");
                            var ctx19 = c19.getContext("2d");
                            ctx19.beginPath();
                            ctx19.arc(980,70,8,0,2*Math.PI);
                            ctx19.fillStyle="#00FF00";
                            ctx19.fill(); 
                            ctx19.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio19=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b18"){
                            console.log("entra");
                            var c20 = document.getElementById("myCanvas");
                            var ctx20 = c20.getContext("2d");
                            ctx20.beginPath();
                           ctx20.arc(960,100,8,0,2*Math.PI);
                            ctx20.fillStyle="#B40404";
                            ctx20.fill(); 
                            ctx20.stroke();
                            cambio19=10;
                        } 
                        if(cambio19 === 0){
                            console.log(" NO  entra");
                            var c20 = document.getElementById("myCanvas");
                            var ctx20 = c20.getContext("2d");
                            ctx20.beginPath();
                            ctx20.arc(960,100,8,0,2*Math.PI);
                            ctx20.fillStyle="#00FF00";
                            ctx20.fill(); 
                            ctx20.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio20=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b21"){
                            console.log("entra");
                            var c21 = document.getElementById("myCanvas");
                            var ctx21 = c21.getContext("2d");
                            ctx21.beginPath();
                            ctx21.arc(960,160,8,0,2*Math.PI);
                            ctx21.fillStyle="#B40404";
                            ctx21.fill(); 
                            ctx21.stroke();
                            cambio20=20;
                        } 
                        if(cambio20 === 0){
                            console.log(" NO  entra");
                            var c21 = document.getElementById("myCanvas");
                            var ctx21 = c21.getContext("2d");
                            ctx21.beginPath();
                           ctx21.arc(960,160,8,0,2*Math.PI);
                            ctx21.fillStyle="#00FF00";
                            ctx21.fill(); 
                            ctx21.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio21=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b22"){
                            console.log("entra");
                            var c22 = document.getElementById("myCanvas");
                            var ctx22 = c22.getContext("2d");
                            ctx22.beginPath();
                           ctx22.arc(920,160,8,0,2*Math.PI);
                            ctx22.fillStyle="#B40404";
                            ctx22.fill(); 
                            ctx22.stroke();
                            cambio21=10;
                        } 
                        if(cambio21 === 0){
                            console.log(" NO  entra");
                            var c22 = document.getElementById("myCanvas");
                            var ctx22 = c22.getContext("2d");
                            ctx22.beginPath();
                           ctx22.arc(920,160,8,0,2*Math.PI);
                            ctx22.fillStyle="#00FF00";
                            ctx22.fill(); 
                            ctx22.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio22=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b25"){
                            console.log("entra");
                            var c23 = document.getElementById("myCanvas");
                            var ctx23 = c23.getContext("2d");
                            ctx23.beginPath();
                            ctx23.arc(920,200,8,0,2*Math.PI);
                            ctx23.fillStyle="#B40404";
                            ctx23.fill(); 
                            ctx23.stroke();
                            cambio22=10;
                        } 
                        if(cambio22 === 0){
                            console.log(" NO  entra");
                            var c23 = document.getElementById("myCanvas");
                            var ctx23 = c23.getContext("2d");
                            ctx23.beginPath();
                           ctx23.arc(920,200,8,0,2*Math.PI);
                            ctx23.fillStyle="#00FF00";
                            ctx23.fill(); 
                            ctx23.stroke();
                            //prubafinaldehoy
                        }
            }
                 var cambio23=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b24"){
                            console.log("entra");
                            var c24 = document.getElementById("myCanvas");
                            var ctx24 = c24.getContext("2d");
                            ctx24.beginPath();
                             ctx24.arc(960,200,8,0,2*Math.PI);
                            ctx24.fillStyle="#B40404";
                            ctx24.fill(); 
                            ctx24.stroke();
                            cambio23=10;
                        } 
                        if(cambio23 === 0){
                            console.log(" NO  entra");
                            var c24 = document.getElementById("myCanvas");
                            var ctx24 = c24.getContext("2d");
                            ctx24.beginPath();
                              ctx24.arc(960,200,8,0,2*Math.PI);
                            ctx24.fillStyle="#00FF00";
                            ctx24.fill(); 
                            ctx24.stroke();
                            //prubafinaldehoy
                        }
            }
              var cambio24=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "b23"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(890,180,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio24=10;
                        } 
                        if(cambio24 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(890,180,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
                        
     // Laboratorio  de SOFTWARE//
                        
                        
            }var cambio25=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s1"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(650,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio25=10;
                        } 
                        if(cambio25 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(650,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
            var cambio26=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s2"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(650,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio26=10;
                        } 
                        if(cambio26 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(650,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
            var cambio27=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s3"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(650,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio27=10;
                        } 
                        if(cambio27 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(650,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
            var cambio28=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s4"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(650,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio28=10;
                        } 
                        if(cambio28 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(650,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            } 
            
            var cambio29=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s8"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(745,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio29=10;
                        } 
                        if(cambio29 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(745,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
              var cambio30=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s7"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(745,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio30=10;
                        } 
                        if(cambio30 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(745,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
                 var cambio31=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s6"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(745,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio31=10;
                        } 
                        if(cambio31 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(745,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
            
                 var cambio32=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s5"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(745,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio32=10;
                        } 
                        if(cambio32 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(745,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
            var cambio33=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s9"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(775,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio33=10;
                        } 
                        if(cambio33 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(775,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
              var cambio34=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s10"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(775,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio34=10;
                        } 
                        if(cambio34 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(775,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
              var cambio35=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s11"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(775,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio35=10;
                        } 
                        if(cambio35 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(775,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
              var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s12"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(775,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(775,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
              var cambio37=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s16"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(865,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio37=10;
                        } 
                        if(cambio37 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(865,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  var cambio38=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s15"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(865,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio38=10;
                        } 
                        if(cambio38 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(865,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  var cambio39=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s14"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(865,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio39=10;
                        } 
                        if(cambio39 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(865,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  var cambio40=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s13"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(865,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio40=10;
                        } 
                        if(cambio40 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(865,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  var cambio41=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s17"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(895,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio41=10;
                        } 
                        if(cambio41 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(895,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s18"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(895,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(895,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s19"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(895,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(895,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s20"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(895,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(895,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }                 
            
            
              var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s21"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(985,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(985,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  
              var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s22"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(985,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(985,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  
              var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s23"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(985,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(985,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  
              var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "s24"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(985,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(985,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }  
            
            
            // Laboratorio  de  PLATAFORMAS//
            
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p1"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(310,320,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(310,320,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            } 
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p2"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(310,360,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(310,360,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            } 
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p3"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(310,400,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(310,400,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            } 
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p4"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(310,440,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(310,440,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            } 
            
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p5"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(310,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(310,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p6"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(420,320,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(420,320,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p7"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(420,350,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(420,350,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p8"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(420,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(420,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p9"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(420,410,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(420,410,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p10"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(420,440,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(420,440,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p11"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(420,470,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(420,470,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                  var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p12"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(470,320,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(470,320,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                   var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p13"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(470,360,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(470,360,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }       var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p14"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(470,400,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(470,400,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }       var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p15"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(470,440,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(470,440,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }       var cambio36=0;
              for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p16"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(470,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(470,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                 for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p17"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(570,320,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(570,320,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                 for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p18"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(570,360,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(570,360,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                 for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p19"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(570,400,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(570,400,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                 for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p20"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(570,440,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(570,440,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                 for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "p21"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(570,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(570,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
            
            
            
            //  // Laboratorio  REDES
            
            
            var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r1"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(20,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(20,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
            
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r2"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(20,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(20,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
               var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r3"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(20,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(20,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
             var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r4"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(20,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(20,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                    var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r8"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(150,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(150,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }
                    var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r7"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(150,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(150,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }        var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r6"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(150,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(150,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }        var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r5"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(150,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(150,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }        var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r9"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(190,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(190,330,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }        var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r10"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(190,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(190,380,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }        var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r11"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(190,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(190,430,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //prubafinaldehoy
                        }
            }        var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "r12"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(190,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(190,480,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
            
            
            
              // Laboratorio  de MULTIMEDIA
            
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m05"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(30,30,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(30,30,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m06"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(60,30,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(60,30,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m08"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(30,70,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(30,70,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m07"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(60,70,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(60,70,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m09"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(180,30,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(180,30,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m10"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(210,30,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(210,30,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m11"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(180,70,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(180,70,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m12"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(210,70,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(210,70,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m03"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(80,130,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(80,130,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m04"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(80,160,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(80,160,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m02"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(120,130,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(120,130,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
                            ctx25.fill(); 
                            ctx25.stroke();
                            //final de pantallas
                        }
            }
              var cambio36=0;
                   for (var i=0; i < arregloDeCadenas.length; i++) {
                     if(arregloDeCadenas[i] === "m01"){
                            console.log("entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                           ctx25.arc(120,160,8,0,2*Math.PI);
                            ctx25.fillStyle="#B40404";
                            ctx25.fill(); 
                            ctx25.stroke();
                            cambio36=10;
                        } 
                        if(cambio36 === 0){
                            console.log(" NO  entra");
                            var c25 = document.getElementById("myCanvas");
                            var ctx25 = c25.getContext("2d");
                            ctx25.beginPath();
                            ctx25.arc(120,160,8,0,2*Math.PI);
                            ctx25.fillStyle="#00FF00";
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
    
    btnSend.onclick=sendMessage;
    var btnConnect = document.getElementById('connect');
    btnConnect.onclick=connect;
    var btnDisconnect = document.getElementById('disconnect');
    btnDisconnect.onclick=disconnect;
    
    disconnect();
}

window.onload = init;
//onnect();
