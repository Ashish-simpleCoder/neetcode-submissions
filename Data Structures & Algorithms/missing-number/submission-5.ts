class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        // Solution final:- Optimized solution
        // T(c) = O(n)
        // S(c) = O(1)
        let res = nums.length;

        for (let i = 0; i < nums.length; i++) {
            res += i - nums[i];
        }

        return res;
    }
}
