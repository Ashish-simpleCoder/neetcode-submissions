class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // Solution-1:- Brute-Force approach
        // 1. reverse the string
        // 2. compare the original string with reversed one

        const new_str = [...s.toLocaleLowerCase()].filter((char) => {
            char = char.toLocaleLowerCase()
            // Filter out non-alphanumric characters and whitespaces
            // Keep only - a-z, A-Z, 0-9
            return (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
        }).join("")

        const rev_str = [...new_str].reverse().join("");

        return rev_str == new_str
    }
}
