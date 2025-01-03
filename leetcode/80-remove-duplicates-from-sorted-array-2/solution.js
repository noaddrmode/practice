/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1;
    let checkMoreDuplicate = true;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j - 1] != nums[j]) {
            nums[i] = nums[j];
            i++;
            checkMoreDuplicate = true;
        } else {
            if (checkMoreDuplicate) {
                nums[i] = nums[j];
                i++
                checkMoreDuplicate = false;
            }
        }
    }
    return i;
};

let nums = [1,1,1,2,2,3];
removeDuplicates(nums);
nums = [0,0,1,1,1,1,2,3,3];
removeDuplicates(nums);