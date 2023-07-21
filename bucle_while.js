// WHILE
// while (true) {

// }
var y = 1;
while(y <= 10){
    console.log("Bucle While: " + y);
    y++;
    // y = y + 1; 
}

// eg.2 
// En cuanto el contador sea mayor que zero enseña el valor del contador por consola y cada vez
let count = 5;
while(count > 0){
    console.log(count);
    // count = count -1;  // disminuye 1
    count --;
}

//eg.3
let count2 = 0;
while(count2 < 5){ //En cuanto el contador for menor que 5
    console.log(count2);
    //count2 ++; // soma 1
    count2 = count2 + 1;
}

/* 
// El ejemplo abajo no tiene un fin, sigue ejecutandose porque siempre se suma + 1 
let count1 = 1;
while(count1 > 0){
    console.log(count1);
    count1 ++;
} 
*/