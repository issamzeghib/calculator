var evnt =document.getElementById("evnt");
var hom =document.querySelector(".hom");
var mess =document.getElementById("mess");
var man =document.getElementById("man");
var mybo =document.querySelector(".mybo");


var colors=["red","black"]

mybo.onclick =function(){
hom.style.backgroundColor= colors[1];



}

const display= document.getElementById('display');
  function appedtoDisplay(input){

    display.value+=input;
  }
  function clearDisplay(input){
    display.value="";
  }
  function calculate(input){
    display.value= eval(display.value);
  }

  evnt.onclick = function(){
  var me=mess.value;
  if(me!==""){

  
    man.innerHTML=me;
  
    mess.value="";
  }else{
    alert("no mess");
  }


  }