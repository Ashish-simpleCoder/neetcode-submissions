class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        // Solution 2: Three Pointers - I

        // 1. Initialize three pointers: l (boundary for 0s), i (current element), and r (boundary for 2s).
        // 2. While i <= r:
        // 2.1 If nums[i] is 0, swap with nums[l], increment both l and i.
        // 2.2 If nums[i] is 2, swap with nums[r], decrement r (do not increment i since the swapped element needs to be checked).
        // 2.3 If nums[i] is 1, just increment i.

        let i = 0,
            l = 0,
            r = nums.length - 1;

        // 2. While i <= r:
        while (i <= r) {
            // 2.1 If nums[i] is 0, swap with nums[l], increment both l and i.
            if (nums[i] == 0) {
                [nums[l], nums[i]] = [nums[i], nums[l]];
                l++;
            }
            // 2.2 If nums[i] is 2, swap with nums[r], decrement r (do not increment i since the swapped element needs to be checked).
            else if (nums[i] == 2) {
                [nums[i], nums[r]] = [nums[r], nums[i]];
                r--;
                i--;
            }
            // 2.3 If nums[i] is 1, just increment i.
            i++;
        }

    }
}
