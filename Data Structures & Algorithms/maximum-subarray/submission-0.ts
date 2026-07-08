class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        // Solution 1:- Brute Force Approach
        // T(c) = O(n2) and if not tracking sum then O(n3)
        let n = nums.length,
            res = nums[0];
        for (let i = 0; i < n; i++) {
            let cur = 0;
            for (let j = i; j < n; j++) {
                cur += nums[j];
                res = Math.max(res, cur);
            }
        }
        return res;
    }
}
