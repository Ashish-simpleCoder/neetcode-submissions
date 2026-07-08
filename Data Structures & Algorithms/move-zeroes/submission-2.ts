class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        // Solution 1:- My own - In-place replace algorithm. Optimal approach
        // 1. Define two pointer - l - track actual non-zero element sequence ,r
        // 2. iterate over "r" pointer till array length
        // 2.1 if nums[r] != 0, then replace with nums[l] = nums[r], replace zero 
        // 2.2.1 reset nums[r] to 0, increment "l" pointer
        // 2.2 increment "r"

        let l = 0, r = 0

        while (r < nums.length) {
            if (nums[r] != 0) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
                // nums[l++] = nums[r]
                // nums[r] = 0
            }
            r++
        }

    }
}
