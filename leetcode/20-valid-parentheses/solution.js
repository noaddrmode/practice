/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let charStack = [];
    const matchingBraces = {
      "(": ")", 
      "{": "}", 
      "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (matchingBraces[char]) {
        charStack.push(char);
        continue;
      } else if(Object.values(matchingBraces).includes(char)) {
        if(charStack.length < 1) {
          return false;
        }
        let top = charStack[charStack.length - 1];
        if(matchingBraces[top] === char) {
          charStack.pop();
        } else {
          return false;
        }    
      }    
    }
    return true ? charStack.length < 1 : false;
};

let s;
let res;
s = "()"
res = isValid(s);
console.log(res);

s = "()[]{}"
res = isValid(s);
console.log(res);

s = "(]"
res = isValid(s);
console.log(res);

s = "([])"
res = isValid(s);
console.log(res);
