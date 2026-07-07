class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {

        // Solution 2:- Brute Force
        // The majority element appears more than n/2 times. For each element, we can count how many times it appears in the array. If the count exceeds n/2, we've found our answer. This straightforward approach checks every element against every other element.
        let n = nums.length;

        for (let num of nums) {
            let count = nums.reduce(
                (acc, val) => acc + (val === num ? 1 : 0),
                0,
            );
            if (count > Math.floor(n / 2)) {
                return num;
            }
        }
        return -1;
    }
}
