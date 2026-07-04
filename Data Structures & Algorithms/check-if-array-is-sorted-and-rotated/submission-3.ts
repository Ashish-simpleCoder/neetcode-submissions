class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums: number[]): boolean {
        // Solution 4:- Optimal approach. Sliding windows with no extra space[O(1)], t(c) = O(2n)


        // 1. First check original array is sorted or not.
        // 2. If not then
        // 2.1 create sliding_idx, sorted_count
        // 2.2 loop untill sliding_idx < length*2
        // 2.2.1 If next number is bigger or equal than previous
        // 2.2.1.1 Increment sorted_count to track the total sorted items
        // 2.2.1.2 If sorted_count is equal to original array length, means the we have found the sorted array
        // 2.2.2 Reset the sorted_count, because we are resetting the sorted array windows tracker
        // 2.2.3 Update window sliding pointer
        // 2.3 If reached after the loop, then means not sorted. Return false


        // Just extra check
        if (nums.length == 1) {
            return true
        }

        // 1. First check original array is sorted or not.
        if (isSorted(nums)) {
            return true
        }

        // 2. If not then

        // 2.1 create sliding_idx, sorted_count
        const len = nums.length
        let sliding_idx = 1
        let sorted_count = 1


        // 2.2 loop untill sliding_idx < length*2
        while (sliding_idx < nums.length * 2) {
            // 2.2.1 If next number is bigger or equal than previous
            if (nums[sliding_idx % len] >= nums[(sliding_idx - 1) % len]) {
                // 2.2.1.1 Increment sorted_count to track the total sorted items
                sorted_count++
                // 2.2.1.2 If sorted_count is equal to original array length, means the we have found the sorted array
                if (sorted_count == len) {
                    return true
                }
            }
            // 2.2.2 Reset the sorted_count, because we are resetting the sorted array windows tracker
            else {
                sorted_count = 1
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
// S(C) = no extra space = O(1)
