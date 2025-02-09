/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
      for (let j = i+1; j < nums.length; j++) {
        if(nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
};


let nums = [2,7,11,15];
let target = 9;
let res = twoSum(nums, target);
console.log(res);

nums = [3,2,4];
target = 6;
res = twoSum(nums, target);
console.log(res);

nums = [3,3];
target = 6;
res = twoSum(nums, target);
console.log(res);