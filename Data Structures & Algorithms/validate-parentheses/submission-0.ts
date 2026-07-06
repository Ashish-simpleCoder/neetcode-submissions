class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // There is only one solution, Stack based.

        // 1. Create stack, closeToOpen hasmap consisting of all closing-to-opening brackets
        // 2. Iterate over all string chars
        // 2.1 If char is present as key in hashmap, means it is closing bracket
        // 2.1.1 If stack is not empty and last element of stack is equal to the corresponding closing bracket from hashmap then pop
        // 2.1.2 Else it means, we encountered the closing bracket without getting the corresponding opening bracket first. So return false
        // 2.2 Else, push the char(opening bracket) into the stack
        // 3. If reached after the iteration, then check stack is empty or not. If empty then return true

        // 1. Create stack, closeToOpen hasmap consisting of all closing-to-opening brackets
        const stack = []
        const closeToOpen = {
            "}": "{",
            ")": "(",
            "]": "["
        }

        // 2. Iterate over all string chars
        for (let i = 0; i < s.length; i++) {

            // 2.1 If char is present as key in hashmap, means it is closing bracket
            if (s[i] in closeToOpen) {
                // 2.1.1 If stack is not empty and last element of stack is equal to the corresponding closing bracket from hashmap then pop
                if (stack.length > 0 && stack.at(-1) == closeToOpen[s[i]]) {
                    stack.pop()
                } else {
                    // 2.1.2 Else it means, we encountered the closing bracket without getting the corresponding opening bracket first. So return false
                    return false
                }
            } else {
                // 2.2 Else, push the char(opening bracket) into the stack
                stack.push(s[i])
            }
        }

        // 3. If reached after the iteration, then check stack is empty or not. If empty then return true
        return stack.length == 0
    }
}
