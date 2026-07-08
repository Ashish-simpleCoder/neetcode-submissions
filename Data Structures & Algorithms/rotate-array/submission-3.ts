class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        // Solution 3:- Optimal version
        // Using Reverse - T(c) = O(n), S(c) = O(1) 
        /*
            A clever observation: rotating an array by k is equivalent to moving the last k elements to the front. 
            We can achieve this with three reversals. First, reverse the entire array. 
            Now the last k elements are at the front, but in reverse order. 
            Reverse the first k elements to fix their order. 
            Finally, reverse the remaining elements to restore their original order.
        */
        /*
            Algorithm
                Compute k = k % n.
                Reverse the entire array from index 0 to n - 1.
                Reverse the first k elements (from index 0 to k - 1).
                Reverse the remaining elements (from index k to n - 1).
        */

        const n = nums.length;
        k %= n;

        const reverse = (l, r) => {
            while (l < r) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
                r--;
            }
        };

        reverse(0, n - 1);
        reverse(0, k - 1);
        reverse(k, n - 1);
    }
}
