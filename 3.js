function proverit(){
ot1 = 'да';
ot2 = 3;
ot3 = 3;
ot4 = 'нет'; 
ot5 =1;	
ot6 = 1;
ot7 = 1;
ot8 = 2;
ot9 = 2;
ot10 = 1;
ot11 = 123;
ot12 = 123;
ot13 = 2;
ot14 = 3;
ot15 = 3;
otst1 = document.getElementById('z1').value;
otst2 = document.getElementById('z2').value;
otst3 = document.getElementById('z3').value;
otst4 = document.getElementById('z4').value;
otst5 = document.getElementById('z5').value;
otst6 = document.getElementById('z6').value;
otst7 = document.getElementById('z7').value;
otst8 = document.getElementById('z8').value;
otst9 = document.getElementById('z9').value;
otst10 = document.getElementById('z10').value;
otst11 = document.getElementById('z11').value;
otst12 = document.getElementById('z12').value;
otst13 = document.getElementById('z13').value;
otst14 = document.getElementById('z14').value;
otst15 = document.getElementById('z15').value;
ball = 0;
if(otst1 == ot1){
ball +=1;
}
if(otst2 == ot2){
ball +=1;
}
if(otst3 == ot3){
ball +=1;	
}
if(otst4 == ot4){
ball +=1;
}
if(otst5 == ot5){
ball +=1;
}
if(otst6 == ot6){
ball +=1;
}
if(otst7 == ot7){
ball +=1;
}
if(otst8 == ot8){
ball +=1;
}
if(otst9 == ot9){
ball +=1;
}
if(otst10 == ot10){
ball +=1;
}
if(otst11 == ot11){
ball +=1;
}
if(otst12 == ot12){
ball +=1;	
}
if(otst13 == ot13){
ball +=1;
}
if(otst14 == ot14){
ball +=1;
}
if(otst15 == ot15){
ball +=1;
}
vsego_z = 15;
vipol = ball/vsego_z * 100;
document.getElementById('rez').innerHTML = " Задание выполнены верно на "+vipol+"%.";
}

