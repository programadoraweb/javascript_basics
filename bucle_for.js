// FOR
// sintaxis
// for (var x = 1; x <= 10; x++) {
//     console.log("bucle for: " + x);
// }

//eg.1
var text1 = "Today you will learn the letter: ";
    var letterName = ["a ", "b "];
        for (let i = 0; i < letterName.length; i++) {
            console.log(text1 +" "+ letterName[i]);
          document.write(text1 +" "+ letterName[i]+ "</br>");
      }

// eg. 2 
let names = ["Mary","Joseph","Antony"];
for (let i = names.length -1; i >= 0; i--) {
    console.log(names[i]); 
} 
// i = index (nommbre de la variable)
// ejecute este codigo , mientras i sea menor a la longitud del array

// i empieza en cero, mientras i sea menor que la longitud lo ejecutas,
//despues de ejecutar lo incrementas en 1 

//cuando sustituyes el numero de la posicion del array ej.0 por la variable ej. i
//va cambiando de posicion en el array, cada vez que se ejecuta el codigo

// eg.3
// cuando se utiliza o acento invertido  ` , no hace falta poner + " " e os objetos se 
// colocam com o simbolo de dolar y {}
 var lastNames = ["Oliveira", "Silva", "Alvarez", "Hernandez"];
    
 for (let i = 0; i < lastNames.length; i++) {
   console.log(`The object ${lastNames[i]} is placed at position ${i} `);
   console.log("The object"+ " " + lastNames[i]+ "is placed at position " + " " + i + "." );  }