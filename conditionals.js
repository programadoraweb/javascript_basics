// ESTRUCTURAS DE CONTROL
// IF / ELSE
// sintaxis
// if (condicion) {
//     instruccion
// } else {
//     instruccion
// }
if(n1>n2){
    console.log("n1 es mayor que n2");
}else if(n2>n1){
    console.log("n2 es mayor que n1");
}else{
    console.log("Son iguales");
}

// SWITCH: Se utiliza cuando sabemos los posibles valores de comparacion
// switch (expression) {
//     case expression:
//
//         break;
//     default:
//
// }

var color = "verde";

switch (color) {
    case "red":
        console.log("Hold on!!! ");
        break;
    case "yellow":
        console.log("watch out!!!");
        break;
    case "green":
        console.log("Go ahead");
        break;
    default:
        console.log("Please select a correct colour");

}