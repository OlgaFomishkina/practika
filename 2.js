var  semestr1 = ["информатика","математический анализ","английский"];
var  semestr2 = ["теория вероятности","базы даннх","политология"];
console.log(semestr1);

var a = 3;
if (a > 10)alert('верно');else alert('неверно');

var min = 13;
if ( min >= 0 && min <= 14){
alert("первая четверть"); 
}else if ( min >= 15 && min <= 29) {
alert('вторая четверть');
}else if ( min >= 30 && min <= 44) {
alert('третья четверть'); 
}else if (min >= 45 && min <=59) {
alert('четвертая четверть');
}

var ru = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];
var en = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var lang = en;
if (lang == ru) { 
alert (console.log(ru));
} else if (lang == en) { alert (console.log(en));
}
 

var a=20 
if( a==0 || a==2 )alert (a+=7);else alert(a/=10);
 
var a = [4,2,3,4,5];
if ( a[0]==1 || a[0]==2 || a[0]==3) alert ('да');else alert('нет');

let num = 2;
switch (num){
	case 1:
	    alert('зима');
	break;
	case 2:
	    alert('весна');
	break;
	case 3:
	    alert('лето');
	break;
	case 4:
	    alert('осень');
	break;
	
}	