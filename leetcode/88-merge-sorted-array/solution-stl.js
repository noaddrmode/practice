// Approach : Using STL
//     Traverse through nums2 and append its elements to the end of nums1 starting from index m.
//     Sort the entire nums1 array using sort() function.

// Complexity
//     Time complexity: O((m+n)log(m+n))
//     due to the sort() function
//     Space complexity: O(1)
//     We are not using any extra space, so the space complexity is O(1).


var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    let x = nums1.sort((a, b) => a - b);
    console.log(x);
    let y = nums1.sort((a, b) => b - a);    
    console.log(y);
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3
merge(nums1, m, nums2, n);