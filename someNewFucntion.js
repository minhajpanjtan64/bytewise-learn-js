// findlast - method looks at an array from the end and gives you the value of the first element that meets a certain condition
let myArray = [1, 2, 3, 4, 5, 6, 7];
let lastNum = myArray.findLast((num) => num < 7) // 6
// console.log(lastNum);

// findLastIndex - a method that finds the position in the array of the last element that meets a certain condition
const num = [1, 2, 3, 4, 5, 6, 7];
let lastNumTwo = num.findLastIndex((num) => num > 5) // 6
// console.log(lastNumTwo);

// // toReversed - method that is used to safely reverse an array without changing the original one.
const months = ['Jan', 'Feb', 'May', 'June'];
const reversed = months.toReversed();
// console.log(reversed);

// // toSorted - method that safely sorted an array without changing the original.
const newMonths = [1,5,6,7,3,2,9];
const sortedMonts = newMonths.toSorted();
// console.log(sortedMonts);

// // with - methods was introduced as a safe way to update elements in an array without modifying the original array
const langs = [1,10,2];
const myLangs = langs.with(1, 100);
console.log(myLangs);
