function pigLatin (str) {
let strArray = str.split(' ');

let pigLatinWords = strArray.map(function (word) {
  let vowelIndex = word.search(/[aeiou]/i);
  if (/[aeiou]/gi.test(word[0])) return word + 'way';
  if (/[^aeiou]/gi.test(word[0])) return word.slice(vowelIndex) +  word.slice(0,vowelIndex) + 'ay';
  return word.slice(1) + word[0] + 'ay';
});


return pigLatinWords.join(' ');

};
  
  if (typeof module !== 'undefined') {
    module.exports = {pigLatin};
  }
