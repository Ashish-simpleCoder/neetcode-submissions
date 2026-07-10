class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        // SOlution 1:-  Optimal Solution 
        // T(c) = O(n/2)
        // S(c) = O(1)

        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            let tmp = s[i]
            s[i] = s[s.length - 1 - i]
            s[s.length - 1 - i] = tmp
        }
    }
}
