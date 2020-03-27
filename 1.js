  document.getElementById("m1").onclick=displayDate4;
function displayDate4(){
var r = document.getElementById("a1").value;
var m = document.getElementById("a2").value;
document.getElementById("demo5").innerHTML = parseInt(r) +
parseInt(m);

}
   document.getElementById("m2").onclick=displayDate2;
function displayDate2(){
var r = document.getElementById("a1").value;
var m = document.getElementById("a2").value;
document.getElementById("demo5").innerHTML = parseInt(r) -
parseInt(m);

}
   document.getElementById("m3").onclick=displayDate3;
function displayDate3(){
var r = document.getElementById("a1").value;
var m = document.getElementById("a2").value;
document.getElementById("demo5").innerHTML = parseInt(r) *
parseInt(m);

}
  document.getElementById("m4").onclick=displayDate1;
function displayDate1(){
var r = document.getElementById("a1").value;
var m = document.getElementById("a2").value;
document.getElementById("demo5").innerHTML = parseInt(r) /
parseInt(m);

}
  document.getElementById("m5").onclick=displayDate5;
function displayDate5(){
var r = document.getElementById("a1").value;
document.getElementById("demo5").innerHTML = Math.sqrt(parseInt(r));

}

  document.getElementById("m6").onclick=displayDate6;
function displayDate6(){
var r = document.getElementById("a1").value;
var m = document.getElementById("a2").value;
document.getElementById("demo5").innerHTML = Math.pow(parseInt(r),(m));

}