Approach 1: Popping Unwanted Duplicates

Intuition

The input array is already sorted and hence, all the duplicates appear next to each other. The problem statement mentions that we are not allowed to use any additional space and we have to modify the array in-place. The easiest approach for in-place modifications would be to get rid of all the unwanted duplicates. For every number in the array, if we detect > 2 duplicates, we simply remove them from the list of elements and we do this for all the elements in the array.

Algorithm

    The implementation is slightly tricky so to say since we will be removing elements from the array and iterating over it at the same time. So, we need to keep updating the array's indexes as and when we pop an element else we'll be accessing invalid indexes.

    Say we have two variables, i which is the array pointer and count which keeps track of the count of a particular element in the array. Note that the minimum count would always be 1.

    We start with index 1 and process one element at a time in the array.

    If we find that the current element is the same as the previous element i.e. nums[i] == nums[i - 1], then we increment the count. If the value of count > 2, then we have encountered an unwanted duplicate element and we can remove it from the array. Since we know the index of this element, we can use the del or pop or remove operation (or whatever corresponding operation is supported in your language of choice) to delete the element at index i from the array. Since we popped an element, we decrement the index by 1 as well.

    If we encounter that the current element is not the same as the previous element i.e. nums[i] != nums[i - 1], then it means we have a new element at hand and so accordingly, we update count = 1.

    Since we are removing all the unwanted duplicates from the original array, the final array that remains after process all the elements will only contain the valid elements and hence we simply return the length of this array.


```
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # Check for edge case where list is empty
        if not nums:
            return 0

        # Pointer for current index in the list
        i = 1
        # Count of the current element occurrences
        count = 1

        # Iterate through the list starting from the second element
        while i < len(nums):
            # Check if the current element is same as the previous one
            if nums[i] == nums[i - 1]:
                # Increment count for the current element
                count += 1
                # If count exceeds 2, remove the current element
                if count > 2:
                    nums.pop(i)
                    i -= 1
                    count -= 1
            else:
                # Reset count for new element
                count = 1
            # Move to the next element
            i += 1

        # Return the new list length
        return len(nums)
```