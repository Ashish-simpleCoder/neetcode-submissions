class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map();

        let result = false;

        for(let i=0; i<nums.length; i++){
            if(map.has(nums[i])){
                return true
            }else{
                map.set(nums[i],'')
            }
        }

        return result;
    }
}
