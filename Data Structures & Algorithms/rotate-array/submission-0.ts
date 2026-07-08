class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        // Solution 1:- Brute Force
        // 1. create cloned_arr
        // 2. Iterate over all elements from cloned_arr
        // 2.1 start the replacement from (i+k)%len=(0+2)/5 = 2 position, so it can shift element

        let len = nums.length
        k = k % len

        const new_arr = [...nums]

        for (let i = 0; i < len; i++) {
            nums[(i + k) % len] = new_arr[i]
        }
    }
}

//  T(c) = O(n)
// S(c) = O(n)
