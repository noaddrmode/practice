/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let phrase = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let phraseLength = phrase.length;
  if (phraseLength === 0) {
    return true;
  }
  
  let stop = phraseLength % 2 == 0 ? phraseLength / 2 : phraseLength / 2 - 1;
  for (let i = 0, j = phrase.length - 1; i < stop; i++, j--) {
    if (phrase[i] !== phrase[j]) {
      return false;
    }
  }
  return true;
};


let res;
let s;

s = "A man, a plan, a canal: Panama"
res = isPalindrome(s);
console.log(res);

s = " ";
res = isPalindrome(s);
console.log(res);