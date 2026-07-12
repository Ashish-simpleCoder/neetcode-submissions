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
        // Solution 2:- Tortoise & Hair pointer approach. Optimal solution
        // If fast == slow pointer at one time then there is cycle
        // T(c) = O(n)
        // S(c) = O(1)

        let fast = head;
        let slow = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }

        return false;
    }
}
