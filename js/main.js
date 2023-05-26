function suma() {
let num1 = 0;
let num2 = 0;
    
alert("digite los numeros que desea sumar");
num1 = prompt("Ingrese el primer número que desea sumar");
num2 = prompt("Ingrese el segundo número que desea sumar");
    
let resultado = parseInt(num1) + parseInt(num2);
alert("El resultado de la suma es: " + resultado);
}


function opBasicas(){
let num1 = prompt('Escriba el primer numero');
let num2 = prompt('Escriba el segundo numero');
    
let suma = parseInt(num1) + parseInt(num2);
let resta = parseInt(num1) - parseInt(num2);
let multiplicacion = parseInt(num1) * parseInt(num2);
let division = parseInt(num1) / parseInt(num2);
    
alert('La suma de los dos numeros es: ' + suma);
alert('La resta de los dos numeros es: ' + resta);
alert('La multiplicacion de los dos numeros es: ' + multiplicacion);
alert('La division de los dos numeros es: ' + division);
}

function cuadrado(){
let A = 0;
let C = 0;
    
A = parseInt(prompt("ingrese el valor"));
C = A * A;
alert("el cuadrado del numero es: " + C);
}


function triangulo(){
let A = 0;
let T = 0;

A = parseInt(prompt("ingrese el valor"));
T = (A * (A + 1)) / 2;
alert("el triangulo del numero es: " + T);
}

function invercion(){

let capitalInicial = parseInt(prompt("cuanto capital desea invertir:?"));
let añosInvertidos = parseInt(prompt("cuantos años desea invertir:?"));
let interesMensual = 1.7;
let capitalFinal = capitalInicial * Math.pow(1 + (interesMensual/100), añosInvertidos);
alert(" Despues de:  " + añosInvertidos + " años,el capital inicial de:  " + capitalInicial + " tendra un valor de:  " + capitalFinal + ".");
}

function nacimiento(){
//Declarar variables
let edad;
let añoActual;

//Solicitar datos
edad = prompt("Ingrese su edad");
añoActual = prompt("Ingrese el año actual");

//Calcular año de nacimiento
let añoNacimiento = añoActual - edad;

//Mostrar datos por pantalla
alert("Su año de nacimiento es: " + añoNacimiento);    
}

function convercion(){
//Declarar variables
let metros, kilometros, pulgadas;

//Capturar el valor en metros
metros = prompt("¿Cuántos metros hay?");

//Realizar conversion
kilometros = metros / 1000;
pulgadas = metros * 39.3701;

//Mostrar en pantalla
alert(`${metros} metros son ${kilometros} kilometros y ${pulgadas} pulgadas.`);

//Fin
}

function mayor(){
let numero1 = prompt("digite el primero numero");
let numero2 = prompt("digiete el segundo numero");
if (numero1 > numero2) {
alert(numero1 + " es mayor");
} else {
alert(numero2 + " es mayor"); }    
}

function menor(){
let numero1 = prompt("digite el primero numero");
let numero2 = prompt("digiete el segundo numero");
if (numero1 < numero2) {
alert(numero1 + " es menor");
} else {
alert(numero2 + " es menor"); }    
}

function descuento(){

let precioProducto = prompt("digite el precio del producto");
let porcentajeDescuento = 10;
let descuento = (precioProducto * porcentajeDescuento) / 100;
let nuevoPrecio = precioProducto - descuento;
alert(`El precio del producto con un descuento del ${porcentajeDescuento}% es de $${nuevoPrecio}`);
}

function nombre(){
let N1 = prompt("digite su nombre");
let A2 = prompt("digite su apellido");
alert("su nombre es: " +  N1);
alert("su apellido  es: " +  A2);
alert("su nombre completo es: "  +  N1  +  A2);  
}

function gym(){
let si = prompt("Si vas al gym?") 
let no = prompt("No vas al gym?")
if (si) {
    alert('Vamos a muntar putoo todas mienten');
    } else {
    alert( " jajaja sabia que eres una basura" + no); }  
}
    










