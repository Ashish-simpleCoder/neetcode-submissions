/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        // Solution 1:- Store the visted nodes in map(Brute Force)
        // T(c) = O(n)
        // S(c) = O(n)

        const visited_nodes = new Map();

        while (head) {
            if (visited_nodes.has(head)) {
                return true;
            }
            visited_nodes.set(head, 1);
            head = head.next;
        }
        return false;
    }
}
