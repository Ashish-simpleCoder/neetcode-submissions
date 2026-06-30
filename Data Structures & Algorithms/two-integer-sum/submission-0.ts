class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Solution-1
        // Brute-force approach

        // First loop to iterate over all values one by one
        // Inner loop to iterate next element excluding the outloop index, so can check sum for each combination
        for(let i=0; i<nums.length-1;i++){
            for(let j=i+1; j<nums.length; j++){
                // checking the sum of the elements with given target 
                if(nums[i] + nums[j] == target){
                    return [i,j]
                }
            }
        }
    }
}
