class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        left_idx = 1
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[left_idx] = nums[i]
                left_idx += 1
        return left_idx