// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // setting object with data that will be used to encode message
    const encoder = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      "i/j": 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
    // setting object with data that will be used to decode the message 
    const decoder = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "i/j",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
// creating if statement to write function for encoding (if encode)
    if (encode) {
      // setting input data into array to lower case using .toLowerCase() method and spliting every input as separate letter using .split() method
      let inputArray = input.toLowerCase().split("");
      // using .map() method to go thru input data and returning inputArray
      // using .map() helps to go thru each object key and output value of needed key
      // (string) is a whole key: value pair
      // char is value that gonna be assigned 
      // for example /encoder[string] will give output 23 id letter is m / 
      // other words encoder[string] is key of encoder object (key is letter in this case)
      // .map() method is working like for loop
      return inputArray
        .map((string) => {
          let char = encoder[string] || string;
// creating if statement to see if char is even to 'i' or 'j' and return number 42 
// it is a special edge case / in polybius square i/j presented as number 42
// we need to ancount this when we encode and decode
          if (char === "i" || char === "j") {
            return "42";
          }
          // making if statement to see if input data has spaces 
          // if input includes space, we return that space the way it is 
          if (char === " ") {
            return " ";
          }
          // returning char
          return char;
        })
        // using .join() method to combine array into a string
        .join("");
        // else statement to work with our decoder 
    } else {
      // creating variable oddLength to replace space (" ") inside of the input to no space / take space away
      let oddLength = input.replace(" ", "");
      // checking if oddLength is odd 
      // return false
      if (!encode && oddLength.length % 2 === 1) return false;
// creating new empty array to push output inside 
      let finalMessage = [];
      // creating variable to contain an array that was made by using .split() method applied to our input
      let arrayToDecode = input.split("");
      // creating for loop to loop thru created above array to meet all necessary condititons
      for (let i = 0; i < arrayToDecode.length; i++) {
        // variable char is each iterable character /(number) because we decoding/ from input 
        let char = input[i];
        // if statement to check spaces
        // if char === " " (space) we pushing it into finalMessage array
        if (char === " ") {
          // applying .push() method
          finalMessage.push(char);
          // else statement
        } else {
          // creating variable charKey to contain character (char) / as number given from input, becase we decode(ex: 44 34 55)
          // ${char} is first iteration
          // adding 1 to i to make sure we can get 2 numbers to read (each letter in decoder is two digit number)/ ex: 44 or 12
          /* example => "22 32 44"
          i = 0;
          num = 2; and because we do input[i+1] 
          charKey is 22 and so on
          then we have space and then we read two number as 32 as well and so on
          */
         //combing number at index and the next number at index
          let charKey = `${char}${input[i + 1]}`;
          // increaaing iteration by 1  again to make sure that we read two number digit
          // adding one to iterater to skip the already added number
          i++;
          // pushing out charKey (those are letters assigned to two digit number from input / ex: 44 51)
          finalMessage.push(decoder[charKey]);
        }
      }
      // returning finalMessage and using .join()method to combain our array into a string
      return finalMessage.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
