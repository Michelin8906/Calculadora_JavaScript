//declaracion de variables
var btDelete = document.getElementById('on');
var btSing = document.getElementById('sing');
var btRaiz = document.getElementById('raiz');
var btDividido = document.getElementById('dividido');
var btPor = document.getElementById('por');
var btMenos = document.getElementById('menos');
var btPunto = document.getElementById('punto');
var btResultado = document.getElementById('igual');
var btmas = document.getElementById('mas');
var bt1 = document.getElementById('1');
var bt2 = document.getElementById('2');
var bt3 = document.getElementById('3');
var bt4 = document.getElementById('4');
var bt5 = document.getElementById('5');
var bt6 = document.getElementById('6');
var bt7 = document.getElementById('7');
var bt8 = document.getElementById('8');
var bt9 = document.getElementById('9');
var bt0 = document.getElementById('0');

var numero;
var operaciones;
var I = 1;
var num = 0;
var actualopera = '';
var anterioropera = '';
var operacion = undefined;

numero = [bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9,bt0];
operaciones = [btRaiz,btDividido,btPor,btMenos,btmas];
//declaracion de funciones

function clear(){
    actualopera = '';
    anterioropera ='';
    operacion = undefined;
    document.querySelector("#display")
        .innerHTML = 0
}
function agregarnumero(num){
    //alert(num)
    if(document.querySelector("#display").innerHTML = '0' && num === '0'){
        actualopera = '0';
        actualizardisplay();
    }else{
    actualopera = actualopera.toString() + num.toString();
    actualizardisplay();
    }
}
function actualizardisplay(){
    document.querySelector("#display")
        .innerHTML = actualopera;
}
function selectoperacion(op){
    //alert(op)
    if(actualopera === '') return;
    if(anterioropera !== ''){
        calcular()
    }
    operacion = op.toString();
    anterioropera = actualopera;
    actualopera = '';
}
function calcular(){
    var calculo;
    const anterior = parseFloat(anterioropera);
    const actual = parseFloat(actualopera);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case 'mas':
            calculo = anterior + actual;
            break;
        case 'menos':
            calculo = anterior - actual;
            break;
        case 'por':
            calculo = anterior * actual;
            break;
        case 'dividido':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    actualopera = calculo;
    operacion = undefined;
    anterioropera = '';
}
//eventos
numero.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarnumero(boton.id);
        //alert(boton.id);
    })
}); 

operaciones.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectoperacion(boton.id);
        //alert(boton.id);
    })
})

btResultado.addEventListener('click',function(){
    calcular();
    actualizardisplay();
})

btDelete.addEventListener('click',function(){
    clear();
})

function mostrar_numero(event){
    var tecla = event.which || event.keycode;
    document.querySelector("#display")
        .innerHTML = String.fromCharCode(tecla);
}
document.onkeypress = mostrar_numero;