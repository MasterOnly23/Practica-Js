// Metodo map

// const frutas = ["banana", "manzana", "fresa"];

// const nuevoArray = frutas.map((item) => item); // El map siempre debe retornanr algo (forma corta funcion => return...)

// console.log(nuevoArray);

// const users = [
//   { name: "Juan", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 },
// ];

// const names = users.map((user) => user.name);

// console.log(names);

// Metodo filter

const users = [
  { uid: 1, name: "Juan", age: 34 },
  { uid: 2, name: "Amy", age: 20 },
  { uid: 3, name: "camperCat", age: 10 },
];

const mayores = users.filter((user) => user.age > 30);

// Metodo Find
const amy = users.find((user) => user.uid === 2); // devuelve el primer elemento que encuenta, si no encuentra da error

// Metodo some
const existe = users.some((user) => user.uid === 2); // devuelve un booleano si existe o no

// Metodo findIndex
const fIndex = users.findIndex((user) => user.uid === 1); // devuelve el indece del elemento buscado en la funcion, si no lo encuentra retorna -1

console.log(mayores);
console.log(amy);
console.log(fIndex);

// Metodo slice

const array = ["Cat", "Dog", "Tiger", "Zebra"]; // devuevle un array. toma un inicio y un final excluyente (no esta incluido en el array retornado)

const array2 = array.slice(1, 3);
console.log(array2);


// metodo concat
const arr1 = ['a','b','c']
const arr2 = ['d','e','f']
const arr3 = arr1.concat(arr2)  // une 2 o mas arrays
console.log(arr3)

// Spread
const arr31 = [...arr1,...arr2]
console.log(arr31)


// METODO REDUCE

const numeros = [1,2,3,4,5]
const suma = numeros.reduce((acc, current) => acc + current) //recibe el acumulador y el valor actual como argumento
console.log(suma)

const arrNumeros = [
    [0,1],
    [2,3],
    [4,5],
]
const soloNum = arrNumeros.reduce((acc, current) => acc.concat(current)) // tambien se puede usar flat() met experimental
console.log(soloNum)


// Metodo Split

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
const arrayMeses = cadenaMeses.split(",") //pasa na cadena a un array, reciibe como argumento el separador
console.log(arrayMeses)

// Metodo Join

const nuevoTexto = arrayMeses.join("-")
console.log(nuevoTexto)


