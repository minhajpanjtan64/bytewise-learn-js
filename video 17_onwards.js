// function in the javascript 
// function addNum(numb1, numb2)
// {
// console.log(numb1 + numb2);
// }
// addNum(3,4);
// cnan be storeed inside a variable as well
// const result = addNum(3,4);
// console.log("result", result);

// function addNum(numb1, numb2)
// {
// let result = numb1 + numb2;
// return result;
// }

// const result =  addNum(3,4);
// console.log("resultl" , result);
//  the obj  aboerhere is  all about defining the scope of the function
//  here using eturn we can save the value of the result in another variable 
// function loginUserName(username)
// {
// return `${username}  just logged in `

// }

// console.log(loginUserName("minhaj"));
// here we are passing the value of the username to the function and it is returning the value of
// the function which is then logged in the console
// function loginUserName(username)
// {

//     if(!username)
//     {
//         console.log('please enter a valid username ')
//         return
//     }
// return `${username}  just logged in `

// }
// console.log(loginUserName());


// console.log(loginUserName("minhaj"));



// function calculate(...num1) // rest operator 
// {
// return num1
// }
// console.log(calculate(5,10,15,2000,1343));
// function calculate(val ,val2,...num1) // rest operator 
// {
// return num1
// }
// console.log(calculate(5,10,15,2000,1343));
// first two values passed in the val1 AND va2 adnrest in the form of an array 

// object an functions 
// const user = {
//     username : "minhaj",
//     price : 300
// }
// now we will see that how can we pass the obj in the function
// function handleObject(anyuser)
// {
// console.log(`username is ${anyuser.username} and price is ${anyuser.price}`)
// }

// handleObject(user);

//  we can pass the object directly as wel without making it first 
// this is how 

// handleObject({
//     username : "minhaj",
//     price : 3055
// });

// const myNweArray = [200,400,600];

// function  returnSecondValue(getarray)
// {
//     return getarray[1] ;
// }

// console.log(returnSecondValue(myNweArray));
// const myNweArray = [200,400,600];

// function  returnSecondValue(getarray)
// {
//     return getarray ;
//     // return getarray[1] ;
// }

// console.log(returnSecondValue(myNweArray));
//  we can do same like object 
// console.log(returnSecondValue([200,400,500,600]));

// scope in ythe javascript

//Variables declared outside of any function or block have global scope. They are accessible anywhere in the code.

//  let globalVar = "I am a global variable";

//  function showGlobalVar() {
//      console.log(globalVar); // Accessible here
//  }
 
//  showGlobalVar(); // Output: I am a global variable
 
//  console.log(globalVar); // Also accessible here

 

//  function showLocalVar() {
//     let localVar = "I am a local variable";
//     console.log(localVar); // Accessible here
// }

// showLocalVar(); // Output: I am a local variable

// console.log(localVar); // Error: localVar is not defined



// if (true) {
//     let blockVar = "I am a block-scoped variable";
//     console.log(blockVar); // Accessible here
// }

// console.log(blockVar); // Error: blockVar is not defined


// let globalVar = "I am a global variable";

// function showScopes() {
//     let functionVar = "I am a function-scoped variable";

//     if (true) {
//         let blockVar = "I am a block-scoped variable";
//         console.log(globalVar); // Accessible here
//         console.log(functionVar); // Accessible here
//         console.log(blockVar); // Accessible here
//     }

//     console.log(globalVar); // Accessible here
//     console.log(functionVar); // Accessible here
//     console.log(blockVar); // Error: blockVar is not defined
// }

// showScopes();

// console.log(globalVar); // Accessible here
// console.log(functionVar); // Error: functionVar is not defined
// console.log(blockVar); // Error: blockVar is not defined

// Global Scope: Accessible anywhere in the code.
// Function Scope: Accessible only within the function where the variable is declared.
// Block Scope: Accessible only within the block where the variable is declared, using let or const.


// arrow functions in the javascript 

// basic syntax 
// () => {}
//  const  add = (num1, num2) => {
//     return num1 + num2 
//  }
// when using curly braces  return is must 
//  and it is called expicit return 

//  console.log(add(3,7));

//implicit return 

// const  add = (num1, num2) =>  num1 + num2 
// console.log(add(3,7)); // no curly brack

//  another way 

// const  add = (num1, num2) => ( num1 + num2) 
// console.log(add(3,7)); // pranthsis 
// //  no return keyword 

// when  we have to use object  then 
// add = (num1, num2) => ({ name:"minhaj"})


// console.log(add(3,7));


// this in javascript 
// refers the current context 

// const user={
//     username: "minhaj",
//     price: 999,


//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website `
//         )
// }}
// user.welcomeMessage();



// imediately invoking functions expressions 
// () ()
// (function add()
// {
// console.log('db connected ')  ; 
// })()
// used to solve the issue of global pollution
// using arrow function as well

// ( () => {console.log("db dsdsdddsdsd")})()




// ((name)=>{
//     console.log(`dbconnected ${name}`);
// })(`minhaj`);

((num1, num2) => {
    console.log(num1 + num2); 
}) (3,7);
