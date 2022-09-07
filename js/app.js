var wrapper = document.getElementById("signature-pad");
var clearButton = wrapper.querySelector("[data-action=clear]");
var COPYMEButton = wrapper.querySelector("[data-action=keep]");
var changeColorRed = wrapper.querySelector("[data-action=colorR]");
var changeColorOrange = wrapper.querySelector("[data-action=colorO]");
var changeColorYellow = wrapper.querySelector("[data-action=colorY]");
var changeColorGreen = wrapper.querySelector("[data-action=colorG]");
var changeColorBlue = wrapper.querySelector("[data-action=colorBl]");
var changeColorPurple = wrapper.querySelector("[data-action=colorP]");
var changeColorBlack = wrapper.querySelector("[data-action=colorB]");
var undoButton = wrapper.querySelector("[data-action=undo]");
var savePDFButton = wrapper.querySelector("[data-action=savePDF]");
var savePNGButton = wrapper.querySelector("[data-action=save-png]");
var saveJPGButton = wrapper.querySelector("[data-action=save-jpg]");
var saveSVGButton = wrapper.querySelector("[data-action=save-svg]");
var canvas = wrapper.querySelector("canvas");
var wrapper2 = document.getElementById('display-pad');
var canvas2 = wrapper2.querySelector("canvas");
var cheight = parseInt(canvas2.getAttribute("height"));
var cwidth = parseInt(canvas2.getAttribute("width"));
ctx2.fillStyle = "white";
ctx2.fillRect(0,0,cwidth,cheight);

var t = 0;
var signaturePad = new SignaturePad(canvas, {
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  backgroundColor: 'rgba(0,0,0,t)'  
});

var displayPad = signaturePad;
//const canvas2 = document.getElementById("mydisplay");
//const ctx2 = canvas2.getContext("2d");
var xpos = 0;
var ypos = 0;
ctx.lineWidth = 3;
ctx.strokeStyle = "lightcyan";

function savePDF() {
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
     pdf.save("download.pdf");
    //var dataURL = canvas2.toDataURL();
    //download(dataURL, "write-easy.png");
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
        ctx.strokeStyle = "lightcyan";
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
  signaturePad.clear();
var r=255; 
    var g=255; 
    var b=255; 
    var a=0;
        ctx.lineWidth = 2;
        ctx.strokeStyle = "lightcyan";
        // Select a fill style
        ctx.fillStyle = ctx.fillStyle = 'rgba(0,0,0,t)';;
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
});

COPYMEButton.addEventListener("click", function (event) {
if (xpos == 4){
    xpos = 0
    ypos = ypos + 1}
wrapper2.children[0].offsetParent.offsetHeight = math.ceil((ypos)*canvas.height/6);
let pos = 400;
/*
if ('overflow' in wrapper2.style) { //Checks if browser supports scroll function
        wrapper2.window.scroll({
            top : pos,
            left : 0,
            behavior : 'smooth'
        });
    } else {
        wrapper2.smoothScrollTo(0, pos, 500); //polyfill below
    }
*/
console.log(wrapper2.children[0])
console.log(math.ceil((ypos)*canvas.height/6))


ctx2.drawImage(canvas,0,canvas.height/2.5-canvas.height/2.8,canvas.width-5,canvas.height/2.5+canvas.height/2,(xpos)*canvas.width/4,(ypos)*canvas.height/6,canvas.width/4,canvas.height/6);
xpos = xpos + 1;




  signaturePad.clear();
   var r=255; 
    var g=255; 
    var b=255; 
    var a=0;
        ctx.lineWidth = 2;
        ctx.strokeStyle = "lightcyan";
        // Select a fill style
        ctx.fillStyle = ctx.fillStyle = 'rgba(0,0,0,t)';;
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
        canvas2.scrollBy(0, 200);
});

undoButton.addEventListener("click", function (event) {
  var data = signaturePad.toData();

  if (data) {
    data.pop(); // remove the last dot or line
    signaturePad.fromData(data);
  }
});


savePNGButton.addEventListener("click", function (event) {
  if (ctx2.isEmpty()) {
    alert("Please provide pdf first.");
  } else {
    var dataURL = ctx.toDataURL();
    download(dataURL, "signature.pdf");
  }
});

savePDFButton.addEventListener("click", function (event) {
  if (displayPad.isEmpty()) {
    alert("Please provide writing data-action first.");
  } else {
    //var dataURL = displayPad.toDataURL();
    //download(dataURL, "write-easy.png");
  }
});

saveJPGButton.addEventListener("click", function (event) {
  if (signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    var dataURL = signaturePad.toDataURL("image/jpeg");
    download(dataURL, "signature.jpg");
  }
});

saveSVGButton.addEventListener("click", function (event) {
  if (signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    var dataURL = signaturePad.toDataURL('image/svg+xml');
    download(dataURL, "signature.svg");
  }
});
