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
var btpunto = document.getElementById('punto');
var btsigno = document.getElementById('sign');

var numero;
var operaciones;
var I = 1;
var num = 0;
var actualopera = '';
var anterioropera = '';
var operacion = undefined;
var mostraropera = '';
var StrCalculo = '';
var CompaNum = 1;
var calculo = 0;

numero = [bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9,bt0];
operaciones = [btRaiz,btDividido,btPor,btMenos,btmas];
//declaracion de funciones

function clear(){
    I = 1;
    actualopera = '';
    anterioropera ='';
    operacion = undefined;
    document.querySelector("#display")
        .innerHTML = 0
}
function agregarnumero(num){
    //alert(num)
    if(I === 9) return;
    if(document.querySelector("#display").innerHTML === '0' && num === '0'){
        actualopera = '0';
        actualizardisplay();
    }else if(document.querySelector("#display").innerHTML === '0' && num === 'punto'){
        actualopera = actualopera.toString() + ".";
        actualizardisplay();
    }else if(document.querySelector("#display").innerHTML > 0 && num === 'punto'){
        actualopera = actualopera.toString() + ".";
        actualizardisplay();
    }else if(document.querySelector("#display").innerHTML = '' && num === 'punto'){
        return;
    }else{
        if(num === "punto") return;
        actualopera = actualopera.toString() + num.toString();
        actualizardisplay();
    }
    I++
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
    I = 1;
    actualizardisplay();
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
    StrCalculo = calculo.toString();
    CompaNum = StrCalculo.length;
    if(CompaNum > 8){
        calculo = StrCalculo.substring(0,8)
    }
    actualopera = calculo;
    operacion = undefined;
    anterioropera = '';
    I = 1;
}
//eventos
numero.forEach(function(boton){
    
    boton.addEventListener('click',function(){
        agregarnumero(boton.id);
        
    })
    boton.addEventListener('mousedown',function(){
        cambioforma(boton.id);
    })
    boton.addEventListener('mouseup',function(){
        cambioforma2(boton.id);
    })
}); 

function cambioforma(boton){
    document.getElementById(boton).style.transitionProperty = 'transform';
    document.getElementById(boton).style.transitionDuration = '0.5s';
    document.getElementById(boton).style.transform = 'scale(0.9)';
}
function cambioforma2(boton){
    document.getElementById(boton).style.transitionProperty = 'transform';
    document.getElementById(boton).style.transitionDuration = '0.5s';
    document.getElementById(boton).style.transform = 'scale(1.0)';
}
operaciones.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectoperacion(boton.id);
        //alert(boton.id);
    })
    boton.addEventListener('mousedown',function(){
        cambioforma(boton.id);
    })
    boton.addEventListener('mouseup',function(){
        cambioforma2(boton.id);
    })
})

btResultado.addEventListener('click',function(){
    calcular();
    actualizardisplay();
})
btResultado.addEventListener('mousedown',function(){
    cambioforma(btResultado.id);
})
btResultado.addEventListener('mouseup',function(){
    cambioforma2(btResultado.id);
})

btpunto.addEventListener('click', function(){
    agregarnumero(btpunto.id);
})
btpunto.addEventListener('mousedown',function(){
    cambioforma(btpunto.id);
})
btpunto.addEventListener('mouseup',function(){
    cambioforma2(btpunto.id);
})


btDelete.addEventListener('click',function(){
    clear();
})
btDelete.addEventListener('mousedown',function(){
    cambioforma(btDelete.id);
})
btDelete.addEventListener('mouseup',function(){
    cambioforma2(btDelete.id);
})


btsigno.addEventListener('click',function(){
    if(document.querySelector("#display").innerHTML === '0' && document.querySelector("#display").innerHTML === '') return;
    actualopera = document.querySelector("#display").innerHTML;
    actualopera = actualopera * '-1';
    actualizardisplay();
})
btsigno.addEventListener('mousedown',function(){
    cambioforma(btsigno.id);
})
btsigno.addEventListener('mouseup',function(){
    cambioforma2(btsigno.id);
})

function mostrar_numero(event){
    var tecla = event.which || event.keycode;
    document.querySelector("#display")
        .innerHTML = String.fromCharCode(tecla);
}
document.onkeypress = mostrar_numero;
