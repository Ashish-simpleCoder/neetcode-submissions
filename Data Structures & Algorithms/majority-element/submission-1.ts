class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        // Solution 1: Moore Voting (Optimal solution)

        let item = nums[0]
        let count = 1

        for (let i = 1; i < nums.length; i++) {
            if (item == nums[i]) {
                count++
            } else {
                count--
                if (count == 0) {
                    item = nums[i]
                    count = 1
                }
            }
        }
        return item
    }
}
