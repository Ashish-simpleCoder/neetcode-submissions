class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        //  Sorting and direct comparing the whole string

        // base case
        if (s.length != t.length) {
            return false
        }

        // Sorting and joining back to string
        s = [...s].sort().join("")
        t = [...t].sort().join("")

        return t == s
    }
}

//  TC - O(n)
//  SC - O(n)
