/**
 * Created by ×Ó°Á on 2015/11/9.
 */

function $(id){
    return document.getElementById(id);
}
function a(){
    $("screen").onfocus=this.blur();}
function conscrstr(num){
    $(screen).innerHTML += String(num);
    //$("screen").value=$(screen).innerHTML;
}

$("1").onclick = function(){
    conscrstr(1);
}
$("2").onclick = function(){
    conscrstr(2);
}
$("3").onclick = function(){
    conscrstr(3);
}
$("4").onclick = function(){
    conscrstr(4);
}
$("5").onclick = function(){
    conscrstr(5);
}
$("6").onclick = function(){
    conscrstr(6);
}
$("7").onclick = function(){
    conscrstr(7);
}
$("8").onclick = function(){
    conscrstr(8);
}
$("9").onclick = function(){
    conscrstr(9);
}
$("ling").onclick = function(){
    conscrstr(0);
}
$("clear").onclick=function(){
    $("screen").value='';
    $(screen).innerHTML='';
}

var num1,num2;
var oper;
onkeydown = function(event){
    if(event.keyCode == 48 || event.keyCode == 96){
        conscrstr(0);
    }
    if(event.keyCode == 49 || event.keyCode == 97){
        conscrstr(1);
    }
    if(event.keyCode == 50 || event.keyCode == 98){
        conscrstr(2);
    }
    if(event.keyCode == 51 || event.keyCode == 99){
        conscrstr(3);
    }
    if(event.keyCode == 52 || event.keyCode == 100){
        conscrstr(4);
    }
    if(event.keyCode == 53 || event.keyCode == 101){
        conscrstr(5);
    }
    if(event.keyCode == 54 || event.keyCode == 102){
        conscrstr(6);
    }
    if(event.keyCode == 55 || event.keyCode == 103){
        conscrstr(7);
    }
    if(event.keyCode == 56 || event.keyCode == 104){
        conscrstr(8);
    }
    if(event.keyCode == 57 || event.keyCode == 105){
        conscrstr(9);
    }
    if(event.keyCode == 27){
        $("screen").value='';
        $(screen).innerHTML='';
    }
    if(event.keyCode == 8){
        $(screen).innerHTML = $(screen).innerHTML.substr(0,$(screen).innerHTML.length-1);
        //$('screen').value=$(screen).innerHTML;
    }
    if(event.keyCode == 43 || event.keyCode == 107){
        if($(screen).innerHTML.length)
            conscrstr('+');
    }
    if(event.keyCode == 45 || event.keyCode == 109){
        if($(screen).innerHTML.length)
            conscrstr('-');
    }
    if(event.keyCode == 42 || event.keyCode == 106){
        if($(screen).innerHTML.length)
            conscrstr("¡Á");
    }
    if(event.keyCode == 47 || event.keyCode == 111){
        if($(screen).innerHTML.length)
            conscrstr("¡Â");
    }
    if(event.keyCode == 110){
        if($(screen).innerHTML.length)
            conscrstr(".");
    }
    if(event.keyCode == 13){
        dengyu();
    }
}

$('jia').onclick = function () {
    if($(screen).innerHTML.length)
        conscrstr('+');
}
$('jian').onclick = function(){
    if($(screen).innerHTML.length)
        conscrstr('-');
}
$('cheng').onclick = function(){
    if($(screen).innerHTML.length)
        conscrstr("¡Á");
}
$('chu').onclick = function () {
    if($(screen).innerHTML.length)
        conscrstr("¡Â");
}
$('dian').onclick = function(){
    if($(screen).innerHTML.length)
        conscrstr(".");
}
$('del').onclick = function(){
    $(screen).innerHTML = $(screen).innerHTML.substr(0,$(screen).innerHTML.length-1);
    //$('screen').value=$(screen).innerHTML;
}

$('deng').onclick = function(){
    alert("¼ÆËã");
    dengyu();
}

function dengyu(){
    num1 = parseFloat($(screen).innerHTML);
    oper = $(screen).innerHTML.substr(String(num1).length,1);
    num2 = parseFloat($(screen).innerHTML.substr(String(num1).length+1));
    var res=0;
    switch (oper){
        case '+':
            res=num1+num2;
            break;
        case '-':
            res=num1-num2;
            break;
        case '¡Á':
            res=num1*num2;
            break;
        case '¡Â':
            res=num1/num2;
            break;
        default :
            res= 0;
            break;
    }
    $("screen").value=String(res);
    $(screen).innerHTML=String(res);
}
