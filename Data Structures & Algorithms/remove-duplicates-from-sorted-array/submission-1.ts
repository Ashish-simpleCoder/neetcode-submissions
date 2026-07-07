class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        // Solution 2: Better Approach with Sets data structure

        const set = new Set<number>()

        for (let i = 0; i < nums.length; i++) {
            set.add(nums[i])
        }

        let i = 0;

        [...set.values()].forEach((val) => {
            nums[i] = val
            i++
        })

        return set.size
    }
}
