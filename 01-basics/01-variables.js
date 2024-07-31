// Function to add two numbers
function addTwoNumbers(a, b) {
    return a + b;
  }
  
  // Example usage
  let num1 = 5;
  let num2 = 10;
  let result = addTwoNumbers(num1, num2);
  
  console.log("The sum of " + num1 + " and " + num2 + " is: " + result);
//   using the varables 
/*const makes the value unchangeable */
  const accountNumber=14445;
//   such as chnaging hte valu to 14446 wouldnot change it 
  let accountName= "syedMinhaj"
  var accountType="current_account"
//   we do notuse the var now because it had scope issues so now we mostly use const and let
  accountMail="mimhajafjdfsdjf@gmail.com"
 /* as it can be seen that we can declare the variable without using let or var it is permissibe in js but it is no foloowed */
// let's display the simple output of all these values
console.log([ result,accountNumber,accountName,accountType,accountMail]);