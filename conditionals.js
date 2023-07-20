// ESTRUCTURAS DE CONTROL
// IF / ELSE
// sintaxis
// if (condicion) {
//     instruccion
// } else {
//     instruccion
// }
// eg:1
// if(n1>n2){
//     console.log("n1 es mayor que n2");
// }else if(n2>n1){
//     console.log("n2 es mayor que n1");
// }else{
//     console.log("Son iguales");
// }

//eg:2
// var testNote = prompt("Which was your assessment note?");
// var testNote = 8;
// var minimumNote = 6;
// if(testNote >= minimumNote){console.log("Congrats, your note is " + testNote)}else if(testNote < minimumNote){console.log("Unfortunatelly you did not make it this year, please try it next time" + testNote)} else {console.log("please introduce a valid number.");}

//eg:3
var text1 = "I ve gotta a text and a letter: ";
    var letterName = ["a ", "b "];
        for (let i = 0; i < letterName.length; i++) {
            console.log(text1 +" "+ letterName[i]);
        //   document.write(text1 +" "+ letterName[i]+ "</br>");
      }



// SWITCH: Se utiliza cuando sabemos los posibles valores de comparacion
// switch (expression) {
//     case expression:
//
//         break;
//     default:
//
// }



// var color = "verde";

// switch (color) {
//     case "red":
//         console.log("Hold on!!! ");
//         break;
//     case "yellow":
//         console.log("watch out!!!");
//         break;
//     case "green":
//         console.log("Go ahead");
//         break;
//     default:
//         console.log("Please select a correct colour");

// }