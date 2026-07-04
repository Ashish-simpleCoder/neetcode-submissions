class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums: number[]): boolean {
        // Solution 1:- Brute Force Appraoch

        // 1. First check original array is sorted or not.
        // 2. If not then 
        // 2.1. Iterate n-times of the array length
        // 2.1.1 Store first item, remove first item, push the stored item at last
        // 2.1.2 Check if updated array is sorted or not. If sorted then return true
        // 2.1.3 If not sorted, then continue 2.1 loop by iterating i
        // 2.2 If we reach at the code ater the loop, then it means array is not sorted. So return false

        // 1. First check original array is sorted or not.
        if (isSorted(nums)) {
            return true
        }

        // 2. If not then 
        let i = 0
        // 2.1. Iterate n-times of the array length
        while (i < nums.length) {
            // 2.1.1 Store first item, remove first item, push the stored item at last
            const first_item = nums[0]
            nums.shift()
            nums.push(first_item)

            // 2.1.2 Check if updated array is sorted or not. If sorted then return true
            if (isSorted(nums)) {
                return true
            }

            // 2.1.3 If not sorted, then continue 2.1 loop by iterating i
            i++
        }

        // 2.2 If we reach at the code ater the loop, then it means array is not sorted. So return false
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
// S(C) = O(1)
