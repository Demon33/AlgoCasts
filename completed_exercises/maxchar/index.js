// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

//or

function max(str){
const charMap = {};
let max = 0;
let maxChar = '';

for(let i of str){
    charMap[i] = charMap[i] + 1 || 1;
}

for(let i in charMap){
    if(charMap[i] > max){
    max = charMap[i];
    maxChar = i;
    }
}
return maxChar;
}

module.exports = maxChar;
