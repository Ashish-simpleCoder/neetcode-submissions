class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        let sum = 0;
        // needed to pick next character 
        let windowPointer = 1;

        for (let i = 0; i < s.length-1; i++) {
            // two adjacent character diff
            const diff = Math.abs(s[windowPointer].charCodeAt(0) - s[i].charCodeAt(0));
            sum += diff;
            windowPointer++;
        }

        return sum;
    }
}
