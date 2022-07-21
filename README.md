# Decoder-ring-project
Three functions were created to encode and decode text. It can be used when some event is happening and game style activity has to be presented. These functions will let you have so much fun! 
#### Includes:
1. Caesar function 
1. Polybius function
1. Substitution function
1. Caesar function's tests
1. Polybius function's tests
1. Substitution function's tests
<br>

1. Caesar function: When function was building, the following constraints and rules were met:

- If the _shift_ value isn't present, equal to _0_, less than _-25_, or greater than _25_, the function should return _false_.
- Spaces should be maintained throughout, as should other nonalphabetic symbols.
- Capital letters can be ignored.
- If a letter is shifted so that it goes _"off"_ the alphabet (e.g., a _shift_ of _3_ on the letter _z_), it should wrap around to the front of the alphabet (e.g., z becomes c).

2. Polybius function: When building the function, the following constraints and rules were met:

- You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
- When encoding, your output should still be a string.
- When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return _false_.
- Spaces should be maintained throughout.
- Capital letters can be ignored.
- The letters _I_ and _J_ share a space. When encoding, both letters can be converted to _42_, but when decoding, both letters should somehow be shown.

3. Substitution function: When building the function, the following constraints and rules were met:

- The input could include spaces and letters as well as special characters such as _#_, _$_, _*_, etc.
- Spaces should be maintained throughout.
- Capital letters can be ignored.
- The **alphabet** parameter must be a string of exactly _26_ characters, which could include special characters such as _#_, _$_, _*_, etc. Otherwise, it should return _false_.
- All the characters in the **alphabet** parameter _must be unique_. Otherwise, it should return _false_.
