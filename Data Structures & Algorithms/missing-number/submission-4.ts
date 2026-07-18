class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        // Solution 1:- Sort and compare indice with value
        // T(c) = O(n * log(n))
        let n = nums.length
        nums.sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            if (nums[i] != i) {
                return i;
            }
        }
        
        return n
    }
}
