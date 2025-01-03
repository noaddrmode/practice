// Approach 1: Two Pointers

// Intuition

// Since this question is asking us to remove all elements of the given value in-place, we have to handle it with O(1) extra space. How to solve it? We can keep two pointers i and j, where i is the slow-runner while j is the fast-runner.

// Algorithm

// When nums[j] equals to the given value, skip this element by incrementing j. As long as nums[j]=val, we copy nums[j] to nums[i] and increment both indexes at the same time. Repeat the process until j reaches the end of the array and the new length is i.

// This solution is very similar to the solution to Remove Duplicates from Sorted Array.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    console.log(nums);
    return i;
};

let nums = [3,2,2,3];
let val = 3;
let x = removeElement(nums, val);
console.log(x);