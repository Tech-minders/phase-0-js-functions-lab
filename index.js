/*Function 1: calculateTax
Create a function named calculateTax that takes a single parameter, amount, representing 
a monetary value.
The function should calculate a 10% tax on the amount and return the tax value.
*/


function calculateTax(amount){

  let taxRate = 0.1;

  let taxAmount = (taxRate * amount);

  return taxAmount;
}


/*Function 2: convertToUpperCase
Create a function named convertToUpperCase that takes a single parameter, text, which is a string.
The function should convert the string to uppercase and return the result.
*/

function convertToUpperCase(text){

  const uppercaseString = text.toUpperCase();
  return uppercaseString;
};

/*
Function 3: findMaximum
Create a function named findMaximum that takes two parameters, num1 and num2, which are numbers.
The function should return the larger of the two numbers.
*/

function findMaximum(num1,num2){
  let number1= Number(num1);

  let number2= Number(num2);

  if (!number1 && !number2){ 
    console.log('Both numbers must be an integer');
    return;}

  if (num1 >= num2){
    return num1;
  }else {
    return num2;
  }
};


/*
Function 4: isPalindrome
Create a function named isPalindrome that takes a single parameter, word, which is a string.
The function should return true if the string is a palindrome
 (reads the same forward and backward), and false otherwise.
*/

function isPalindrome (word){
   
  const normalizedWord = word;
  const reversedWord = normalizedWord.split('').reverse().join('');
  return normalizedWord === reversedWord;
}

/*
Function 5: calculateDiscountedPrice
Create a function named calculateDiscountedPrice that takes two parameters: 
originalPrice and discountPercentage.
The function should calculate and return the price after applying the discount. 
For example, if originalPrice is $100 and discountPercentage is 20, the function should return
*/

function calculateDiscountedPrice (originalPrice, discountPercentage){
 let discountAmount = (originalPrice * discountPercentage) / 100;
  let finalPrice = originalPrice - discountAmount;
  return finalPrice;

}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };