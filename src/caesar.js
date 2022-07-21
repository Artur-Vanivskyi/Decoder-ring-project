// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
// assigning 0 as a default parameter to shift in case shift value is not present 
  function caesar(input, shift = 0, encode = true) {
    // returning false statement in case if shift = 0 or shift < -25 or shift > 25
    if ((shift === 0 || shift < -25 || shift > 25)) return false;
// creating empty array that will allow me push needed data inside later on
    let string = [];
    // creating variable to do decoding when needed 
    // when we shift and encrypt , later on this variable will hold dycrypted data
    let reverseString;
    // making if statement to see if I need to decode the message  (multiplying by -1 to switch positive integer to negative)
    if(encode === false){
      shift *= -1
    }
    // making for loop to go thru all input data
    for (i = 0; i < input.length; i++) {
      // setting 'letter' variable to store inside every letter by index from input data
      let letter = input[i];
      // making all letter in input data lower case by using .toLowerCase() method
      let lowerCaseLetter = input.toLowerCase();
      // storing index of every letter in char variable
      let char = lowerCaseLetter.charCodeAt(i);
      // assigning character intex plus shift value to variable shifted to have desired movement
      const shifted = char + shift
      // making if statement to see if all conditions are met
      if (char >= 97 && char <=122) {
        // checking condition if shifted value is graiter than 122 , I push data into string with position of index 122 - 26 
        // 26 is amount of letters in alphabet when we go from a to z
        if(shifted > 122){
          string.push(shifted - 26)
          // checging same thing as mentioned before , only difference is that value is less than 97 that its includes special characters
          // in this case we add 26 to the shifted value to see the index that we need 
          // by requirement 25 is maximum that shift can go to 
          // pushing data into empty array
        } else if(shifted < 97){
          string.push(shifted + 26)
          // pushing spaces and all characters that stay in input data
        } else{
          string.push(shifted)
        }
      // I checked if we have all letters and if not , push characted into array
      } else {
        string.push(char);
      }
    }
    // using String.fromCharCode()method to return index into a character(letter)
    // using spread operator to access all indexes separatly to have separate letters joined together
    reverseString = String.fromCharCode(...string);
    console.log(reverseString);
    return reverseString;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


