// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // setting finalMessage as empty array to push data inside later on(will hold our encoded/decoced message)
    const finalMessage = [];
    // writing if statement to check nessesary conditions
    // if no alphabet(string) return false
    // alphabet parameter must be a string of exactly 26 characters, otherwise return false
    if (!alphabet || alphabet.length != 26) return false;
    // creation for loop to loop thru alphabet to check if all alphabet parameters are unique
    for (let j = 0; j < alphabet.length; j++) {
      // wring if statement to check above mentioned condition using indexOf() and lastIndexOf() methods
      if (alphabet.indexOf(alphabet[j]) !== alphabet.lastIndexOf(alphabet[j])) {
        // returning false if condition is not met
        return false;
      }
    }
    // creationg new variable that contains original alphabet (note: in the end we adding one space to make sure that we account for space in input data)/(spaces can be maintained through our encoding/decoding process)
    const orAlphabet = "abcdefghijklmnopqrstuvwxyz ";
    // adding one space to encoded alphabet to account for same as mentioned above
    alphabet += " ";
    // accounting that all input data is lower case by using .toLowerCase() method (Capital letters can be ignored)
    input = input.toLowerCase().split("");
    // creating if statement to write a lines of code when we encode
    if (encode) {
      // creating for/of loop to loop thru array and push into finalMessage index of original character switched with index of encoded alphabet (taking the current character in input, getting the index of it in the OG alphabet and getting the corresponding character in the provided alpabet. then pushing that into the finalMessage array)
      for (char of input) {
        finalMessage.push(alphabet[orAlphabet.indexOf(char)]);
      }
    } else {
      //creating for/of loop to loop thru input data in this case to decode
      for (char of input) {
        // reverse action to encoding action
        finalMessage.push(orAlphabet[alphabet.indexOf(char)]);
      }
    }
    // returning our finalMessage joined as a string by using .join() method
    return finalMessage.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
