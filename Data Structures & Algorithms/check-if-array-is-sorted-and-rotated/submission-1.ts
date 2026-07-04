class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums: number[]): boolean {
        // Solution 2:- Another way with sliding window technique. But not good.


        // 1. First check original array is sorted or not.
        // 2. If not then
        // 2.1 Push all array elements at the end of the array, create sliding_idx 
        // 2.2 loop untill sliding_idx < length
        // 2.2.1 slice the array with sliding_idx to len + sliding_idx, always pick total same number of elements.
        // 2.2.2 Check if sliced array is sorted. If sorted return true.
        // 2.2.3 If not sorted then continue the sliding 
        // 2.2 If reached after the loop, then means not sorted. Return false


        // 1. First check original array is sorted or not.
        if (isSorted(nums)) {
            return true
        }

        // 2. If not then
        // 2.1 Push all array elements at the end of the array, create sliding_idx 
        const len = nums.length
        nums.push(...nums)
        let sliding_idx = 1


        // 2.2 loop untill sliding_idx < length
        while (sliding_idx < len) {
            // 2.2.1 slice the array with sliding_idx to len + sliding_idx, always pick total same number of elements.
            const tmp_arr = [...nums].slice(sliding_idx, len + sliding_idx)

            // 2.2.2 Check if sliced array is sorted. If sorted return true.

            if (isSorted(tmp_arr)) {
                return true
            }
            // 2.2.3 If not sorted then continue the sliding 
            sliding_idx++
        }
        // 2.2 If reached after the loop, then means not sorted. Return false
        return false
    }

}

function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false
        }
    }
    return true
}

// T(C) = Two nested loop with n times = O(n2)
// S(C) = doubling the size of array, plus creating tmp array =  O(2n + n) = O(3n)
