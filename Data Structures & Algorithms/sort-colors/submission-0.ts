class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        // Solution 1: Bucket Sorting(Counting Sort)

        // Define 0,1 and 2 as key in hashmap with value of 0(initial count)
        // First pass: Iterate over array and store all colors counts in hashmap
        // Second pass: Refill array with hashmap color count


        // Define 0,1 and 2 as key in hashmap with value of 0(initial count)
        const mp = { 0: 0, 1: 0, 2: 0 }

        // First pass: Iterate over array and store all colors counts in hashmap
        for (const n of nums) {
            mp[n] = mp[n] + 1
        }

        let index = 0

        // Second pass: Refill array with hashmap color count
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < mp[i]; j++) {
                nums[index] = i
                index++
            }
        }
    }
}

// T(c) = O(3*[n]) = O(n)
// S(c) = O(1)
