class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // Solution-2:- Two-pointer approach
        // 1. Take i=0, j=s.length-1
        // 2. Run while loop untill i==j
        // 2.1 Compare s[i] == j[i]
        // 2.2 if any of them are non-alpha-numeric, increment i or decrement j 
        // 2.3 if not matched then return false other wise incremnt i and decrement j at the same time
        // After the iteration is over, return true

        let i = 0, j = s.length - 1

        while (i <= j) {
            const left = s[i].toLocaleLowerCase()
            const right = s[j].toLocaleLowerCase()

            const isLeftAlphaNumeric = (left.charCodeAt(0) >= 97 && left.charCodeAt(0) <= 122) || (left.charCodeAt(0) >= 48 && left.charCodeAt(0) <= 57)
            const isRightAlphaNumeric = (right.charCodeAt(0) >= 97 && right.charCodeAt(0) <= 122) || (right.charCodeAt(0) >= 48 && right.charCodeAt(0) <= 57)

            if (!isLeftAlphaNumeric && !isRightAlphaNumeric) {
                i++
                j--
            }
            else if (!isLeftAlphaNumeric) {
                i++
            } else if (!isRightAlphaNumeric) {
                j--
            } else if (isLeftAlphaNumeric && isRightAlphaNumeric) {
                if (left != right) {
                    return false
                }
                i++
                j--
            }
        }


        return true
    }
}

// Time Complexity = O(n)
// Space Complexity = O(1)