class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Solution 2: Hashmap check with sum diff

        // 1. Initialize empty hasmap, which will store all encountered element and their respective index as value
        // 2. Iterate over all items from array
        // 2.1 Get the different with target-currentNum
        // 2.2 If diff value is present in hashmap then it mean we have found the elements, so return their indices
        // 2.3 Else just add the value and its index in hashmap

        // 1. Initialize empty hasmap, which will store all encountered element and their respective index as value
        const prevMap = {}  // [value]: [index]


        // 2. Iterate over all items from array
        for (let i = 0; i < nums.length; i++) {
            // 2.1 Get the different with target-currentNum
            const diff = target - nums[i]

            // 2.2 If diff value is present in hashmap then it mean we have found the elements, so return their indices
            if (diff in prevMap) {
                return [i, prevMap[diff]]
            } else {
                // 2.3 Else just add the value and its index in hashmap
                prevMap[nums[i]] = i
            }
        }

    }
}
