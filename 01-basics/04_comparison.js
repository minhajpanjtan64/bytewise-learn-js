// console.log(2 > 1);  returns true value
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1); returns false
// console.log(2 != 1);

// always  consider having same same dataypes while in comparison
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
console.log(null >= 0); //null conveted into zero

// console.log(undefined == 0);  
// console.log(undefined > 0);
// console.log(undefined < 0);

// === 
// strict check 
console.log("2" === 2);


  console.log( typeof somen);// console.log(2 > 1);  returns true value
  // console.log(2 >= 1);
  // console.log(2 < 1);
  // console.log(2 == 1); returns false
  // console.log(2 != 1);
  
  // always  consider having same same dataypes while in comparison
  // console.log("2" > 1);
  // console.log("02" > 1);
  
  console.log(null > 0);
  console.log(null == 0);
  console.log(null >= 0); //null conveted into zero
  
  console.log(undefined == 0);  
  console.log(undefined > 0);
  console.log(undefined < 0);
  
  // === 
  // strict check 
  console.log("2" === 2);

//   sssssssssssssssssssssssssssss
// primitive and non primitve datatyes 
//  primitve datatypees are 7
// includes  number boolean  sring null undefined  symbol BigInt
let  somen=4872348237498274298472984732498n;
 
// declaring symbol datatype
// Symbols are a unique and immutable primitive data type introduced in ECMAScript 2015 (ES6). They are primarily used to create unique property keys that avoid name collisions, especially useful in objects.

// Creating Symbols:
// You create a symbol by calling the Symbol() function.

//primitive datatypes store in stack memiry  , they do what if we want to access the original data stored in shows the copoy if the  in the stack form
let sym1 = Symbol();
let sym2 = Symbol('description');

//  non primitve datatypes
// arrays , objects and functions
//heap datastruture is used for memory storag, usign referneces to call the original value 
 
// Declaring an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing array elements
console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'

// Modifying array elements
fruits[2] = 'Mango';
console.log(fruits); // ['Apple', 'Banana', 'Mango']

// Adding new elements
fruits.push('Orange'); //push and pop functions for adding and removing 
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange']

// Removing the last element
fruits.pop();
console.log(fruits); // ['Apple', 'Banana', 'Mango']
// object decaration 
// Declaring an object
let person = {
    name: 'John Doe',
    age: 30,
    isEmployed: true
  };
  
  // Accessing object properties
  console.log(person.name); // 'John Doe'
  console.log(person['age']); // 30
  
  // Modifying object properties
  person.age = 31;
  console.log(person.age); // 31
  
  // Adding new properties
  person.address = '123 Main St';
  console.log(person.address); // '123 Main St'
  
 
  delete person.isEmployed;
  console.log(person.isEmployed); // undefined
//declarating functions 

function addTwoNumbers(a, b) {
    return a + b;
  }
  
  let result = addTwoNumbers(3, 4);
  console.log(result); // 7
  
