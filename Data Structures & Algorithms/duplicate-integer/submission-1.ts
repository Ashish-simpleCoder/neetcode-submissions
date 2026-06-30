class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set();

        let result = false;

        for(let i=0; i<nums.length; i++){
            if(set.has(nums[i])){
                return true
            }else{
                set.add(nums[i])
            }
        }

        return result;
    }
}
