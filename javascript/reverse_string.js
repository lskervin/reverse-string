//I want to create a function that returns the input reversed
// I need to iterarte over the string length and return it in the reverse order
//I need to set a let varible so I can add each character returned starting with the last charachter


function reverseString(str) {
  // type your code here
  let reversed = ""; //declare a variable as an empty string
  //Below variable i has a value that is equll to the expression (str.length - 1) which is the index of the last character in a str. parameter
  for (let i = str.length - 1; i > -1; --i) { 
    //The for loop above is iterating through the array of the total character length of str
    //we set a condition that when i is greater than -1 subtract 1 from the value of i
    reversed = reversed + str[i]; //this is updating the value of the variable reversed to 
  }


  return reversed; // here we are returning the updated value of reversed after iterating through the character length of str
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// ## Before you start coding

// 1. Rewrite the problem in your own words
// 2. Validate that you understand the problem
// 3. Write your own test cases
// 4. Pseudocode
// 5. Code!