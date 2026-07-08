class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        // Solution 1:- Brute Force
        /*
            The simplest way to rotate an array by k positions is to perform k single rotations. 
            In each rotation, we save the last element, 
            shift every element one position to the right, 
            and place the saved element at the front. 
            This mimics the physical act of rotating items in a line. 
            While straightforward, this approach is slow because we repeat the entire shift process k times.
        */
        const n = nums.length;
        k %= n;
        while (k > 0) {
            const tmp = nums[n - 1];
            for (let i = n - 1; i > 0; i--) {
                nums[i] = nums[i - 1];
            }
            nums[0] = tmp;
            k--;
        }

    }
}
