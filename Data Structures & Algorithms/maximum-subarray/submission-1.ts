class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        // Solution 2:- Optimal way - Kadane's algorithm
        let max = -Infinity
        let sum = 0

        for (const item of nums) {
            sum += item
            max = Math.max(sum, max)

            if (sum < 0) {
                sum = 0
            }
        }
        return max
    }
}
