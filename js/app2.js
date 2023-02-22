var wrapper = document.getElementById("signature-pad");
var clearButton = wrapper.querySelector("[data-action=clear]");
var COPYMEButton = wrapper.querySelector("[data-action=keep]");
//var EE = wrapper.querySelector("[data-action=enter]");
var canvas = wrapper.querySelector("canvas");
var wrapper2 = document.getElementById('display-pad');
var canvas2 = wrapper2.querySelector("canvas");
var cheight = parseInt(canvas2.getAttribute("height"));
var cwidth = parseInt(canvas2.getAttribute("width"));
var WH = parseInt(canvas.getAttribute("height"));
var WW = parseInt(canvas.getAttribute("width"));
ctx2.fillStyle = "white";
ctx2.fillRect(0,0,cwidth,cheight);
var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;
console.log(screenWidth,screenHeight);
console.log(cwidth,cheight);
console.log(WW,WH);
var tCtx;

var t = 0;
var offsetpos;
var signaturePad = new SignaturePad(canvas, {
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  backgroundColor: 'rgba(0,0,0,t)'
});

var displayPad = signaturePad;
var xpos = 0;
var ypos = 0;
ctx.lineWidth = 3;
ctx.strokeStyle = "lightcyan";

var rightMouseClicked = false;

function hide() {
  var x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function handleMouseDown(e) {
  //e.button describes the mouse button that was clicked
  // 0 is left, 1 is middle, 2 is right
  if (e.button === 2) {
    rightMouseClicked = true;
    getMousePosition(canvas,e);
  } 
  console.log("rightMouseClicked2");
  var currentScroll = document.documentElement.scrollTop;/* || document.body.scrollTop;*/
  console.log(currentScroll);
}

function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  var currentScroll = document.documentElement.scrollTop;
   currentScroll = wrapper2.scrollTop;
  console.log(currentScroll, currentScroll);
    pX = event.clientX;
    pY = currentScroll;
  let x = event.clientX - rect.left;
  let y = currentScroll - rect.top -5;
  
  ctx2.fillStyle = "#FFF";
  ctx2.fillRect(pX, pY, canvas.width/4, canvas.height/4);
  /*drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)*/
  ctx2.drawImage(canvas,0,0,canvas.width-5,canvas.height/2.5+canvas.height/1.45,pX,pY,canvas.width/4,canvas.height/4);
 lines();
}

document.addEventListener('mousedown', handleMouseDown);
/*document.addEventListener('mouseup', handleMouseUp);*/
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

function savePDF() {
    let currentDate = new Date();
    let Datetime = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear() + "--" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ".pdf";
  if (1==2) {
    var xxx=1;
  } else {
    var context = canvas2.getContext('2d');
    var imgData = canvas2.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF({
        unit:"px",
        format: [cheight*2,cwidth*0.6]
        });
     pdf.addImage(imgData, 'JPEG', 0, 0);
     pdf.save(Datetime);
  }
}



function colorR(){
  var r =  255;
  var g = 0;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorO(){
  var r =  255;
  var g = 173;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorY(){
  var r =  255;
  var g = 255;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorG(){
  var r =  20;
  var g = 255;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorBl(){
  var r =  0;
  var g = 120;
  var b = 255;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorP(){
  var r =  165;
  var g = 0;
  var b = 255;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function colorB(){
  var r =  0;
  var g = 0;
  var b = 0;
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
}
function lines(){
    // This library does not listen for canvas changes, so after the canvas is automatically
  // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
  // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
  // that the state of this library is consistent with visual state of the canvas, you
  // have to clear it manually.
  signaturePad.clear();
var r=255;
    var g=255;
    var b=255;
    var a=1;
        ctx.lineWidth = 2;
        ctx.strokeStyle = "cyan";
        // Select a fill style
        ctx.fillStyle = 'rgba(0,0,0,t)';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6);
        ctx.lineTo(5, canvas.height*0.6);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6+3);
        ctx.lineTo(5, canvas.height*0.6+3);
        //ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6+canvas.height/4);
        ctx.lineTo(5, canvas.height*0.6+canvas.height/4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6-canvas.height/4);
        ctx.lineTo(5, canvas.height*0.6-canvas.height/4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6+canvas.height/4+3);
        ctx.lineTo(5, canvas.height*0.6+canvas.height/4+3);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6-canvas.height/4+3);
        ctx.lineTo(5, canvas.height*0.6-canvas.height/4+3);
        ctx.stroke();
}
function linesUndo(){
    var r=255;
    var g=255;
    var b=255;
    var a=1;
        ctx.lineWidth = 2;
        ctx.strokeStyle = "cyan";
        // Select a fill style
        ctx.fillStyle = 'rgba(0,0,0,t)';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6);
        ctx.lineTo(5, canvas.height*0.6);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6+3);
        ctx.lineTo(5, canvas.height*0.6+3);
        //ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6+canvas.height/4);
        ctx.lineTo(5, canvas.height*0.6+canvas.height/4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6-canvas.height/4);
        ctx.lineTo(5, canvas.height*0.6-canvas.height/4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6+canvas.height/4+3);
        ctx.lineTo(5, canvas.height*0.6+canvas.height/4+3);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width-5, canvas.height*0.6-canvas.height/4+3);
        ctx.lineTo(5, canvas.height*0.6-canvas.height/4+3);
        ctx.stroke();
}
function centre(){
    if(xpos != 0){
        ypos = ypos + 1;}
    xpos = 1.5;
ctx2.drawImage(canvas,0,canvas.height/2.5-canvas.height/2.8,canvas.width-5,canvas.height/2.5+canvas.height/1.45,(xpos)*canvas.width/4,(ypos)*canvas.height/6,canvas.width/4,canvas.height/4);
wrapper2.scrollTo(0,(ypos)*canvas.height/6 - canvas.height/12);


ypos = ypos + 1;
xpos = 0;
    lines();
}

function mynewline(){
    ypos = ypos + 1;
    xpos = 0;
wrapper2.scrollTo(0,(ypos)*canvas.height/6 - canvas.height/12);
}

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);

  // This part causes the canvas to be cleared
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

    lines();
}

// On mobile devices it might make more sense to listen to orientation change,
// rather than window resize events.
window.onresize = resizeCanvas;
resizeCanvas();

function download(dataURL, filename) {
  var blob = dataURLToBlob(dataURL);
  var url = window.URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
}

// One could simply use Canvas#toBlob method instead, but it's just to show
// that it can be done using result of SignaturePad#toDataURL.
function dataURLToBlob(dataURL) {
  // Code taken from https://github.com/ebidel/filer.js
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

clearButton.addEventListener("click", function (event) {
  var data = signaturePad.toData();
  if (data != "") {
    data.pop(); // remove the last dot or line
    signaturePad.fromData(data);
    console.log(data)
  } else {
    lines();
  }
});

/*EE.addEventListener('keydown', function (event) {
 var key=event.keyCode || event.which;
  if (key==13){
     copyme();
  }
});*/
function copyme() {
if (xpos == 4){
    xpos = 0
    ypos = ypos + 1}
if (document.getElementById('text').value ==" "){
  ctx2.drawImage(canvas,0,canvas.height/2.5-canvas.height/2.8,canvas.width-5,canvas.height/2.5+canvas.height/1.45,(xpos)*canvas.width/4,(ypos)*canvas.height/6,canvas.width/4,canvas.height/4);

wrapper2.scrollTo(0,(ypos)*canvas.height/6 - canvas.height/12);

xpos = xpos + 1;

 lines();
 document.getElementById('text').value = " ";
} 
if(document.getElementById('text').value !=" "){
  //tCtx = document.getElementById('textCanvas').getContext('2d'), //Hidden canvas
  //imageElem = document.getElementById('text'); //Image element
  //tCtx.canvas.width = 300; //tCtx.measureText(this.value).width;
  //tCtx.fillText(this.value, 0, 10);
  ctx2.drawImage(tCtx.canvas,0,0,tCtx.canvas.width*0.3,tCtx.canvas.height*2,(xpos)*canvas.width/4,(ypos)*canvas.height/6,canvas.width/4,canvas.height/4);
  document.getElementById('text').value = " ";
  xpos = xpos + 1;
}

}

// Text input element
document.getElementById('text').addEventListener('keyup', function() {
  tCtx = document.getElementById('textCanvas').getContext('2d'), //Hidden canvas
  imageElem = document.getElementById('text'); //Image element
  
  tCtx.canvas.width = 300; //tCtx.measureText(this.value).width;
  //tCtx.fillText(this.value, 0, 10);
  tCtx.fillText(this.value, 0, 10);
  //imageElem.src = tCtx.canvas.toDataURL();
  //ctx2.drawImage(tCtx.canvas,0,0,tCtx.canvas.width,tCtx.canvas.height*2,(xpos)*canvas.width/4,(ypos)*canvas.height/6,canvas.width/4,canvas.height/4);

  //console.log(imageElem.src);
}, false);

COPYMEButton.addEventListener("click", function (event) {
if (xpos == 4){
    xpos = 0
    ypos = ypos + 1}
if (document.getElementById('text').value ==" "){
  ctx2.drawImage(canvas,0,canvas.height/2.5-canvas.height/2.8,canvas.width-5,canvas.height/2.5+canvas.height/1.45,(xpos)*canvas.width/4,(ypos)*canvas.height/6,canvas.width/4,canvas.height/4);

wrapper2.scrollTo(0,(ypos)*canvas.height/6 - canvas.height/12);

xpos = xpos + 1;

 lines();
 document.getElementById('text').value = " ";
} 
if(document.getElementById('text').value !=" "){
  //tCtx = document.getElementById('textCanvas').getContext('2d'), //Hidden canvas
  //imageElem = document.getElementById('text'); //Image element
  //tCtx.canvas.width = 300; //tCtx.measureText(this.value).width;
  //tCtx.fillText(this.value, 0, 10);
  ctx2.drawImage(tCtx.canvas,0,0,tCtx.canvas.width*0.3,tCtx.canvas.height*2,(xpos)*canvas.width/4,(ypos)*canvas.height/6,canvas.width/4,canvas.height/4);
  document.getElementById('text').value = " ";
  xpos = xpos + 1;
}

});
// Text input element
document.getElementById('text').addEventListener('keyup', function() {
  tCtx = document.getElementById('textCanvas').getContext('2d'), //Hidden canvas
  imageElem = document.getElementById('text'); //Image element
  
  tCtx.canvas.width = 300; //tCtx.measureText(this.value).width;
  //tCtx.fillText(this.value, 0, 10);
  tCtx.fillText(this.value, 0, 10);
  //imageElem.src = tCtx.canvas.toDataURL();
  //ctx2.drawImage(tCtx.canvas,0,0,tCtx.canvas.width,tCtx.canvas.height*2,(xpos)*canvas.width/4,(ypos)*canvas.height/6,canvas.width/4,canvas.height/4);

  //console.log(imageElem.src);
}, false);

function handleKeyPress(e){
 var key=e.keyCode || e.which;
  if (key==13){
     searching();
  }
}








