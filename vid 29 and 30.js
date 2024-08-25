// for loop
// for(let i=0;i<=10;i++)
// {
//     const element = i;
//     if(element==5)
//     {
//         console.log("number is 5");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop : ${i}`)
//     for (let j = 1; j<=10; j++) {
//         console.log(i + "*" + j + "=" + i * j );

//     }
// }
// const months = [
//     "January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"
//   ];

// for (let index = 0; index <= months.length; index++) {
//     const element = months[index];
//     console.log(element);

// }
// while loop
// let num = 1;
// while (num<=5) {
//     console.log(num)
//     num++;

// }

// let arr = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
// let index = 0;

// while (index < arr.length) {
//     let element =arr[index];
//     console.log(element);
//     index =index + 1;
// }
  // let i= 2;

  // let j= 1;

  // while(i<=10)
  // {
   
  //   while(j<=10)
  //   {
  //       console.log(i + "*" + j + "=" + i * j );
  //       j++
  //   }
   
  // }

//   let i = 1;

// while (i <= 10) {
//     console.log(`outer loop : ${i}`);
    
//     let j = 1;
//     while (j <= 10) {
//         console.log(i + "*" + j + "=" + i * j);
//         j++;
//     }
    
//     i++;
// }

// do while looop kaam pele condition baad main

// let i = 1;

// do {
//     let j = 1;  
//     while (j <= 10) {
//         console.log(i + "*" + j + "=" + i * j);
//         j++;
//     }
//     i++;
// } while (i <= 10);

// for in loop for each loop 


// its an easy way of for loop
// const arr =[1,2,3,4,5];
// for (const num of arr){
//   console.log(num);
// }

// const greetings = "hello world";
//  for (const greet of greetings)
//  {
  // console.log(greet);
//  }
//  const greetings = "hello world";

// for (const greet of greetings) {
  // if (greet === " ") { // Check if the current character is a space
    // console.log("break word");
    // continue; // Skip the rest of the loop iteration for spaces
  // }
  // console.log(greet); // Print non-space characters
// }


// maps


// const map = new Map()
// map.set('pk' , "pakistan")
// map.set('usa',"united states")
// map.set('pk' , "pakistan")

// console.log(map);


// for (const key of map)
// {
//   console.log(key); // returned an array 
// }

// // if we watn to seperate the value and key then 
// for(const [key, value ] of map)
// {
//   console.log(key, ":-",value);
// }

// const myobject = {
//   js: "javascript",
//   cpp: "c++",
//   rb :"ruby",
//   swift :"swift by apple"

// }
// for(const key in myobject)
// {
  // console.log(key);
  // console.log(`${key} shortcut is for ${myobject[key]}`);
// }
// {
//   console.log(myobject[key]);
// }

// for in usage in arrays 

// const prog = ["js","cpp ","java","rb"]
// for(const key in prog)
// {
//   console.log(key);//keys  mean index
//   console.log(prog[key]); // values
// }

// for each loop

// const coding = ["js " , "rubyy" ,"java " ,"c++"];
// // for each loop is used to iterate over arrays and objects
// coding.forEach(   function (item) {
//   console.log(item);
// })

// // using arrow function in for each
// coding.forEach((val)=>
// {
//   console.log(val);
// })

// function PrintMe(item)
// {
//   console.log(item);
// }

// coding.forEach(PrintMe());
// can also be used for accesing every info asuch as item its index and whole array

// coding.forEach((item, index , arr)=>{
//   console.log(item,index,arr);
// })

// const mycoding = [
//   {
//     namefile: "js",
//     languageName:"javascript"

//   },
//   {
//     namefile: "cpp",
//     languageName:"c++"
//   },
//   {
//     namefile: "py",
//     languageName:"python"
//   }
// ]

// mycoding.forEach((item) => {
//   console.log(item.languageName);
// })


// VIDEO 30

// syntax 
//  const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newnNUm = myNums.filter((num) => num > 4);

// console.log(newnNUm);

// map in Array
// const newNums = myNums.map
// ( (num) => { return num  * 10})
// .map((num) =>{return num +1})
// .filter((num) => {return num >= 50})



// console.log(newNums);

// reduce method in js 




const myNum = [1,2,3]

//   const myTotal  = myNum.reduce ( function (acc , currentval)
// {
//   console.log(`acc: ${acc} currval : ${currentval}`);
//   return acc + currentval
// } , 0);

// console.log(myTotal);
//  using arrow function 

//  const myTotal = myNum.reduce( (acc , currentval)=>{
//   console.log(`acc: ${acc} currval : ${currentval}`);
// return  acc + currentval;

//  },0);
//  console.log(myTotal);

  const shopingCart = [
    {
      itemname : "Js course",
      Price : 999
    },
    {
      itemname : "c++ course",
      Price : 10050
    },
    {
      itemname : "DS course ",
      Price : 10000
    },
    {
      itemname : "mobile dev  course ",
      Price : 5000
    }
  ]

 const price2 = shopingCart.reduce ( ( acc , items) => {
  console.log(`price of item : ${items.itemname} is ${items.Price}`)
  return acc + items.Price},0)


console.log(price2); //7799



























// ...................................DOM IN JS .......................

