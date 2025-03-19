//RESUELVE LOS EJERCICIOS AQUI

// Ejercicio 1
const numbers = [4, 5, 6, 7, 8, 9, 10];

let elevados = (elevados) => numbers.map((numero) => numero ** numero);
console.log(elevados(numbers));

// Ejercicio 2

let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let paises = ["Italia", "Japon", "Valencia"];

const result2 = () =>
  foodList.map(
    (frase, index) => `Como soy de ${paises[index]}, amo comer ${frase}`
  );
console.log(result2());

// Ejercicio 3

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

let result3 = (devolverPersonas) =>
  staff.map(
    (persona) =>
      `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]},`
  );

console.log(result3(staff));

// Ejercicio 4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = () => numbers2.filter((numeros) => numeros % 2 === 1);

console.log(result4());

// Ejercicio 5

const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

let result5 = () =>
  foodList2
    .filter((listaComida) => listaComida != listaComida.isVeggie)
    .map((listaComida) => `Que rico ${listaComida.name} me voy a comer!`);

console.log(result5(foodList));

// Ejercicio 6

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

let nombresMasDe300 = (devolverNombres) =>
  inventory.filter((nombre) => nombre.price > 300).map((nombre) => nombre.name);

console.log(nombresMasDe300(inventory));

// Ejercicio 7

let numeros3 = [39, 2, 4, 25, 62];
let result7 = (multiplicarArray) =>
  numeros3.reduce((numero, position) => numero * position + numero);

console.log(result7(numeros3));

// Ejercicio 8

const sentenceElements = [
  "Me",
  "llamo",
  "Ignacio",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

let formarPalabra = () =>
  sentenceElements.reduce((acum, elem) => `${acum} ${elem}`);

console.log(formarPalabra(sentenceElements));

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

// Ejercicio 9

const books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];

const result9 = books
  .filter((categoria) => categoria.category == "code")
  .reduce((acc, actual) => acc.price + actual.price, 0);

console.log(result9);

// A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.
// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.

let sortedArray = [1, 0, 3, 5, 4];
let returnElement = (returnSortedElement) =>
  sortedArray.filter((index, position) => index === position);

console.log(returnElement(sortedArray));
