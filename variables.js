
// VARIABLES - la variable se almacena temporalmente en la memoria RAM (que es la memoria variable)
// Es donde podemos almacenar tipos de datos
// ex. se declaran con la palabra 'x' y se asigna el valor con '='
// tipo de dato numerico
var x = 5;
var y = 2.7;
// tipo de dato texto 'string'
var texto = 'Hi There';
var texto2 = "Good bye";
console.log(texto);
console.log(texto2);
// añado otro valor a la variable 'texto2'
texto2 = "Hello again";
console.log(texto2);
// tipo de dato booleano
var boolean = true;
// tipo de array
console.log(boolean);
//
var precioUnidad, cantidad, total;
        //declaracion de 3 variables en 1 linea 
        precioUnidad = 5;
        cantidad = 100;
        total= precioUnidad*cantidad;
        alert('El importe toal de la compra es: ' + total + ' EUROS');

var tShirtSizes = [ "small","meddium" ,"Large" ,"X-Large"];
console.log(tShirtSizes);
// Restricciones
// 1-Los nombres empiezan por letras, underscore _ o simbolo de dolar $
// 2-Los nombres de las variables no pueden tener expacios en blanco
// 3-Son case sensitive(Detecta mayusculas y minusculas)
// 4- Suelen escribirse con camelCase.

// OPERAR CON VARIABLES
// tipos de operadores
// +:suma
// -:resta
// /:division
// *:multiplicacion
// %:resto

// ejemplos
var num1 = 5;
var num2 = 3;

var suma = num1 + num2;
var resta = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;

//  FUNCIONES DE ENTRADA Y SALIDA EN JS
console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La mult es: " + mult);
console.log("La div es: " + div);