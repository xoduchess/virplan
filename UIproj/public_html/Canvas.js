
        //canvas id= "theCanvas" width="500" height="500"> </canvas>
       // <!-- Selects the Element canvas by the Idea created --> 
               //var canvas = document.getElementById("theCanvas"); 
      
//Create Canvas 
var canvas = document.getElementById('theCanvas'); //Selects created canvas element 
      var context = canvas.getContext('2d'); //2D Fill 
//Draw Line 
function init(){
      context.beginPath();//Starting New Path
      context.moveTo(100, 150); //Where want to start draw/cursor
      context.lineTo(450, 50); //Draws line from point a to point b
      context.stroke();} //Apply stroke to make visible, Can change color
//Draw Lines 
window.onload = init; //Calls init function, when page is loaded  