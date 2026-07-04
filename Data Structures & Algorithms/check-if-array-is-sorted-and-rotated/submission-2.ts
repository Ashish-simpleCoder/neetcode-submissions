class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums: number[]): boolean {
        // Solution 3:- Another way with sliding window technique. Throwaway and restart window. Better approach


        // 1. First check original array is sorted or not.
        // 2. If not then
        // 2.1 Push all array elements at the end of the array, create sliding_idx 
        // 2.2 loop untill sliding_idx < nums.length(the new doubled length)
        // 2.2.1 If next number is bigger or equal than previous
        // 2.2.1.1 Increment idx counter to track the total sorted items
        // 2.2.1.2 If idx is equal to original array length, means the we have found the sorted array
        // 2.2.2 Reset the idx counter, because we are resetting the sorted array windows tracker
        // 2.2.3 Update window sliding pointer
        // 2.3 If reached after the loop, then means not sorted. Return false


        // 1. First check original array is sorted or not.
        if (isSorted(nums)) {
            return true
        }

        // 2. If not then
        // 2.1 Push all array elements at the end of the array, create sliding_idx 
        const len = nums.length
        nums.push(...nums)
        let sliding_idx = 1
        let idx = 1


        // 2.2 loop untill sliding_idx < new doubled length
        while (sliding_idx < nums.length) {

            // 2.2.1 If next number is bigger or equal than previous
            if (nums[sliding_idx] >= nums[sliding_idx - 1]) {
                // 2.2.1.1 Increment idx counter to track the total sorted items
                idx++
                // 2.2.1.2 If idx is equal to original array length, means the we have found the sorted array
                if (idx == len) {
                    return true
                }
            }
            // 2.2.2 Reset the idx counter, because we are resetting the sorted array windows tracker
            else {
                idx = 1
            }

            // 2.2.3 Update window sliding pointer
            sliding_idx++
        }

        // 2.3 If reached after the loop, then means not sorted. Return false
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

// T(C) = one loop with 2n times = O(2n)
// S(C) = doubling the size of array =  O(2n) = O(2n)
