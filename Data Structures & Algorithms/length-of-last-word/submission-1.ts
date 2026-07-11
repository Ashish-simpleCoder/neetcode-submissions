class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let word = "";

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] != " ") {
                word += s[i];
            } else {
                if (word) {
                    break;
                }
            }
        }

        return word.length;
    }
}
