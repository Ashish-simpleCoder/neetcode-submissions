class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums: number[]): number[] {
        const count_map = new Map();

        for (let i = 0; i < nums.length; i++) {
            count_map.set(nums[i], (count_map.get(nums[i]) ?? 0) + 1);
        }

        const sortedMapCount = [...count_map.entries()].sort((a, b) => {
            if (a[1] == b[1]) {
                return b[0] - a[0];
            }
            return a[1] - b[1];
        });

        const sortedArr = new Array(nums.length);
        let j = 0;
        sortedMapCount.forEach(([key, count]) => {
            for (let i = 0; i < count; i++) {
                sortedArr[j++] = key;
            }
        });

        return sortedArr;
    }
}
