//RESUELVE LOS EJERCICIOS AQUI

// Ejercicio 1
const numbers = [4, 5, 6, 7, 8, 9, 10];

let elevados = (elevados) => numbers.map((numero) => numero ** numero);
console.log(elevados(numbers));

// Ejercicio 2

let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let paises = ["Italia", "Japon", "Valencia"];
const food = (crearArray) =>
  foodList.map((frase) => `Como soy de ${paises[0]}, amo comer ${[frase]}`);

console.log(food(foodList));

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

let result4 = (devolverNumero) =>
  numbers2.filter((numeros) => numeros % 2 === 1);

console.log(result4(numbers2));

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

let result5 = (devolverArray) =>
  foodList2
    .filter((listaComida) => listaComida != listaComida.isVeggie)
    .map((listaComida) => `Que rico ${listaComida.name} me voy a comer!`);

// let result2 = (devolverArray) =>
//   devolverArray.filter((listaComida) => !listaComida.isVeggie);

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
