const substitutionModule = (function () {
    function substitution(input, alphabet, encode = true) {
      //if no aplha provided, return false to prevent code running
      if (!alphabet) {
        return false;
      }
      //if alpha isn't 26 chars long return false so no run
      if (alphabet.length !== 26) {
        return false;
      }
      //if alpha isn't different from standard alpha, return false
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet.lastIndexOf(alphabet[i]) !== i) {
          return false;
        }
      }
      const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
      input = input.toLowerCase();
      let output = "";
      if (encode) {
        for (let j of input) {
          if (j === " ") {
            output += " ";
          } else {
            let indexValue = standardAlphabet.indexOf(j);
            output += alphabet[indexValue];
          }
        }
      } else {
        for (let k of input) {
          if (k === " ") {
            output += " ";
          } else {
            let indexValue = alphabet.indexOf(k);
            output += standardAlphabet[indexValue];
          }
        }
      }
      return output;
    }
    return {
      substitution,
    };
  })();