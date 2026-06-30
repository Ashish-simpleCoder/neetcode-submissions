class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        //  Solution-3. Two hashmaps for storing all words frequency for both strings
        // - and comparing their count 
        
        // base case
        if (s.length != t.length) {
            return false
        }

        // Create map to store count of all words from String-1 with [word]:count pair 
        const map = new Map()
        const map2 = new Map()

        // Store count for each word in map for String-1
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) ?? 0) + 1)
        }

         // Store count for each word in map for String-2
        for (let i = 0; i < t.length; i++) {
            map2.set(t[i], (map2.get(t[i]) ?? 0) + 1)
        }


        // comparing each key count from map-1 to maps-2 each key count

        const result = [...map.entries()].every(([key, count])=>{
            return map2.get(key) == count
        })
        // If true, then Anagram otherwise false
        return result
    }
}

//  TC - O(n)
//  SC - O(n)