var emptyArray = [];
// declarar un array vacio
//no sabes cuantos elementos estaran dentro de este Array
//
//
/* //Dos formas distintas de declarar un Array:
var properties = ["House", "Appartment", "Mansion", "Farm"];
// var properties = new Array ("House", "Appartment", "Mansion", "Farm");
document.write("<p> The first property is a/an: </strong>" + properties[0] +" </strong></p>");
alert(properties.length);
//propiedad para ver el tamanho del array */

var properties = ["House", "Appartment", "Mansion", "Farm"];

document.write("<p> The last article is: </strong>" + properties[properties.length-1] + "</strong></p>");
// con properties.length-1  conseguimos acceder a la ultima posicion del array

properties.unshift("Mall");
//anadir elemento a la primeira posicion 

document.write("<p> Updated list:  " + properties + "</p>");

properties.push(prompt("Type in a new property:"));
//anadir elemento a la ultima posicion 
    
document.write("<p> Updated list:  " + properties + "</p>");

alert(properties.length);