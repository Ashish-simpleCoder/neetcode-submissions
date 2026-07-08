class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0
        let prevMaxCount = 0

        for (let i = 0; i < nums.length; i++) {
            if (nums[i]) {
                count++
                prevMaxCount = Math.max(prevMaxCount, count)
            } else {
                count = 0
            }
        }
        return prevMaxCount
    }
}
