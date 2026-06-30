class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        //  Hashmap frequence count method
        
        // base case
        if (s.length != t.length) {
            return false
        }

        // Create map to store count of all words from String-1 with [word]:count pair 
        const map = new Map()

        // Store count for each word in map for String-1
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) ?? 0) + 1)
        }

        // Compare each word of String-2 with String-1
        for (let i = 0; i < s.length; i++) {
            if (map.has(t[i])) {
                // If word from String-2 is matched with any key present in map, then
                // reduce the count value of it
                map.set(t[i], map.get(t[i]) - 1)
            }
        }

        // Check if all keys in the map have 0 count as value - a:0, b:0 eg.
        const result = [...map.values()].every(val => val == 0)

        // If true, then Anagram otherwise false
        return result
    }
}

//  TC - O(n)
//  SC - O(n)
