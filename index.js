//RESUELVE LOS EJERCICIOS AQUI

// console.log("Hello World");

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let multiplyBy2 = (n) => n * 2;

// console.log(arr);

// Ejercicio 1
const numbers = [4, 5, 6, 7, 8, 9, 10];
let devolverNumeroCuadrado = numbers.map((numero) => numero * numero);

console.log(devolverNumeroCuadrado);

// Ejercicio 2

let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let devolverPalabras = foodList.filter((palabra) => palabra.length >= 6);

console.log(devolverPalabras);
