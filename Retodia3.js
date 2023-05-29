//Ejercicios: Nivel 1

//1.Declarar las siguientes variables; nombre, apellido, país, ciudad, edad, está casado, año y autoriza un valor, use el operador typeof para verificar diferentes tipos de datos.

let nombre = 'pepsi';
let apellido = 'walker';
let pais = 'BOLIVIA';
let ciudad = 'tarija';
let estaCasado = true;
let año = 1999; 

console.log(typeof 'nombre');
console.log(typeof 'apellido')
console.log(typeof 'pais')
console.log(typeof 'ciudad')
console.log(typeof estaCasado);
console.log(typeof año);

//2.Verifique si typeof '10' es igual a 10

let num = "10";
let numInt = +num;
console.log(numInt); 

//3.Verifique si parseInt('9.8') es igual a 10

let num1 = 9.8;
let numInt1 = parseInt(num);
console.log(numInt1);

//4.Verifique cualquier valor booleano verdadero o falso.
//!Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
//!!Escriba tres declaraciones de JavaScript que proporcionen un valor falso.

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

//5.Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
4 > 3 //true
4 >= 3  //true
4 < 3  //false
4 <= 3 // false
4 == 4  // true
4 === 4 // false 
4 != 4 // false
4 !== 4 // false
4 != '4' // 
4 == '4' // true
4 === '4' // false
//Encuentre la longitud de Python y jerga y haga una declaración de comparación falsa.
console.log("python".length == "jerga".length);

console.log(4 > 3);
console.log(4 >= 3); 
console.log(4 < 3); 
console.log(4 <= 3); 
console.log(4 == 4); 
console.log(4 === 4); 
console.log(4 != 4); 
console.log(4 !== 4); 
console.log(4 != '4');
console.log(4 == '4'); 
console.log(4 === '4'); 

//6.Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
4 > 3 && 10 < 12 //false
4 > 3 && 10 > 12 //true
4 > 3 || 10 < 12 //false
4 > 3 || 10 > 12 //true
!(4 > 3) //true
!(4 < 3) //false
//!(FALSO) //false
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') //false
//No hay 'on' tanto en dragon como en python


//7.Use el objeto Date para realizar las siguientes actividades
/*¿Qué año es hoy?
¿Qué mes es hoy con un número?
¿Qué fecha es hoy?
¿Qué día es hoy con un número?
¿Cuál es la hora actual?
¿Cuántos minutos hay actualmente?
Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
*/
const now = new Date();
const years = now.getFullYear(); 
const months = now.getMonth() + 1;
const days = now.getDay();
const dates = now.getDate(); 
const hours = now.getHours(); 
const minutos = now.getMinutes(); 

console.log(`"fecha"${years}/${months}/${days}/${dates}  /${hours}:${minutos}`);

const now2 = new Date();
console.log(now2.getTime()); 

/*Ejercicios: Nivel 2

//1.Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 xbxh).
Ingrese base: 20
Ingrese altura: 10
El área del triángulo es: 100

//Calculemos el área de un circulo
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  314 m


//2.Escriba un script que solicite al usuario que ingrese el lado a, el lado by el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
Ingrese lado a: 5
Ingrese lado b: 4
Ingrese lado c: 3
El perimetro del triangulo es: 12

//3.Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))


//4.Obtenga el radio usando prompt y calcule el área de un círculo (área = pi xrxr) y la circunferencia de un círculo (c = 2 x pi xr) donde pi = 3.14.


//5.Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2


//6.La pendiente es m = (y 2 -y 1 )/(x 2 -x 1 ). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)


//7.Compare la pendiente de las dos preguntas anteriores.


//8.Calcula el valor de y (y = x 2 + 6x + 9). Trate de usar diferentes valores de xy averigüe en qué valor de xy es 0.


//9.Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
Ingrese horas: 40
Introduce la tarifa por hora: 28
Su ganancia semanal es 1120

*/
//10.Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.


//11.Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
let nombreA = "Asabeneh";
let apellidoB = "Yetayeh";
console.log(nombreA.length);
console.log(apellidoB.length);
console.log('Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.');

 

//12.Declare dos variables miEdad y suEdad y asigne los valores iniciales y miEdad y suEdad.

let miEdad = 250;
let suEdad = 25;
//Soy 225 años mayor que tú.

if(miEdad > suEdad){
    let diferencia = miEdad - suEdad;

    console.log('Soy ' + diferencia + ' años mayor que tú.')
    
} else {
    let diferencia = suEdad - miEdad;

    console.log('eres mayor con ' + diferencia + ' años')
}

/*13.Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

Introduzca el año de nacimiento: 1995
Tienes 25 años. Tienes la edad suficiente para conducir.

Introduzca el año de nacimiento: 2005
Tienes 15 años. Podrás conducir después de 3 años.*/

let edad = prompt("Introduzca el año de nacimiento:");

edad >= 18
    ? console.log("Tienes 25 años. Tienes la edad suficiente para conducir..")
    : console.log(`Te faltan años para conducir.`);


let años = prompt("Introduzca el año de nacimiento:");
años = 1995;
 if('años 1995') {
    console.log("Tienes 25 años. Tienes la edad suficiente para conducir.");
  }
 else('años 2005'); {
    console.log("Tienes 15 años. Podrás conducir después de 3 años.");
  }
  function solicitarnombre(){
    let nombre = "";
    nombre = prompt("Ingresa tu nombre:"); // JOSE
    
    let ci = "";
    ci = prompt("Ingresa tu CI:"); // 7156311354
    
    let celular = "";
    celular = prompt("Ingresa tu celular:"); //7236952
  
    alert(nombre + " " + ci + " " + celular);
    //   JOSE 7156311354 7236952
  }
  
  solicitarnombre();/*
/*14.Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
Ingrese el número de años de vida: 100
Viviste 3153600000 segundos.

function solicitarnombre(){
  let nombre = "";
  nombre = prompt("Ingresa tu nombre:"); // JOSE
  
  let ci = "";
  ci = prompt("Ingresa tu CI:"); // 7156311354
  
  let celular = "";
  celular = prompt("Ingresa tu celular:"); //7236952

  alert(nombre + " " + ci + " " + celular);
  //   JOSE 7156311354 7236952
}

solicitarnombre();
*/

//15.Cree un formato de hora legible por humanos usando el objeto Date.
//AAAA-MM-DD HH:mm

const now = new Date();
const year = now.getFullYear(); 
const month = now.getMonth() + 1;
const day = now.getDay(); 
const hours = now.getHours(); 
const minutes = now.getMinutes(); 
console.log(`"fecha" ${year}-${month}-${day}-  /${hours}:${minutes}`);

//DD-MM-AAAA HH:mm

const now = new Date();
const day = now.getDay();
const month = now.getMonth() + 1;
const year = now.getFullYear();  
const hours = now.getHours(); 
const minutes = now.getMinutes(); 
console.log(`"fecha" ${day}-${month}-${year}  /${hours}:${minutes}`);

//DD/MM/AAAA HH:mm

const now = new Date();
const day = now.getDay();
const month = now.getMonth() + 1;
const year = now.getFullYear();
const hours = now.getHours(); 
const minutes = now.getMinutes(); 
console.log(`Actual ${day}/${month}/${year} ${hours}:${minutes}`); 

//Ejercicios: Nivel 3

//1.Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
//AAAA-MM-DD HH:mm ej. 20120-01-02 07:05

const fecha = new Date();

const year = fecha.getFullYear();
const month = fecha.getMonth() + 1; 
const day = fecha.getDay(); 
const Hours = fecha.getHours(); 
const minutes = fecha.getMinutes();

console.log(`fecha /${year}-${month}-${day}  ${Hours}:${minutes}`);


