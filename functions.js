//Functions

  /* 
// A funcao tem o objetivo de criar funcionalidades reutilizaveis
  
        // Declarar la funcion: 
        function nombre_funcion( parametros o argumentos){
        //Codigo a ejecutar por la funcion
        }
        
        //Llamar a la funcion para que sea ejecutada
        nombre_funcion();
        */

//eg.1 
//Declare a function: 
function greeting(name){
    console.log(name);
    // console.log('Hello'+ name);
}
 
// call the function
greeting ('Ingrid');

//eg. 3
//declarar la funcion
function add(n1,n2){
    console.log( n1 + n2);
}

//llamar a la funcion
add (5,10);
add (200,300);

 //eg.4 
 function dia_de_hoy(){
    var hoy=new Date();
    document.write(hoy.toDateString());
}
dia_de_hoy(); // se ve en el cuerpo del html. 

// eg. 5
// declare the funcion 
function your_name(param_name){
    document.write("Hola "+ param_name + ".");
}
//get the input data and keep it in a variable
var param_name = prompt("Pls, write your name:");
// show the variable param_name by console
console.log(param_name);
// Call the function
your_name(param_name);
// you could also call the funcion on a script inserted into an HTML:
/* <p>Hola: <script>your_name(param_name);</script>. </p> */