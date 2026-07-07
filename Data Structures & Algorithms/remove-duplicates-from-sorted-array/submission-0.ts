class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        // Solution-1: Two pointer approach

        // 1. We define two pointers, left, i
        // left will track the unique element 
        // i will iterate over all elements
        // 2. While loop to iterate over all elements
        // 2.1 If the current number is not equal to the (left) unique element pointer then
        // 2.1.1 replace the next index of left pointer to current number - [left+1] = current number
        // 2.1.2 Increment left pointer, because we have added new unique element
        // 2.2 increment i pointer
        // 3. return left+1, which the actual count of unique elements in array

        let left = 0, i = 1

        while (i < nums.length) {
            if (nums[i] != nums[left]) {
                nums[left + 1] = nums[i]
                left++
            }
            i++
        }

        return left + 1
    }
}

// T(c) = O(n)
// S(c) = O(1)
