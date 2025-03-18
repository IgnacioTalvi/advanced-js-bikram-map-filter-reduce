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

let personas = (devolverPersonas) =>
  staff.map(
    (persona) =>
      `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]},`
  );

console.log(personas(staff));
