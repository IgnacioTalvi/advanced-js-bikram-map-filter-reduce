//RESUELVE LOS EJERCICIOS AQUI

// console.log("Hello World");

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let multiplyBy2 = (n) => n * 2;

// console.log(arr);

// Ejercicio 1
const numbers = [4, 5, 6, 7, 8, 9, 10];

let elevados = (elevados) => numbers.map((numero) => numero ** numero);
console.log(elevados(numbers));

// Ejercicio 2

let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let generarArray = foodList.reduce((frase, frase2, frase3, frase4) => {
  return `Como soy de Italia, amo comer ${frase}, Como soy de Japon, amo comer${frase2} `;
});

console.log(generarArray);

// let devolverPalabras = foodList.filter((palabra) => palabra.length >= 6);

// console.log(devolverPalabras);

// Ejercicio 3

// let lista = [2,-1,1,3,5,8];
// let acumulado = lista.reduce(function(anterior, actual, indice, vector){
//  return anterior + actual;
// });
// console.log(acumulado); // 18

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

let formarFrases = staff.map((frase) => frase.name);

console.log(formarFrases);
