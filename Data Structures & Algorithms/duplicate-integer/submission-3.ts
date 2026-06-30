class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set();

        for(let i=0; i<nums.length; i++){
            const item = nums[i]
            if(set.has(item)){
                return true
            }else{
                set.add(item)
            }
        }

        return false;
    }
}
