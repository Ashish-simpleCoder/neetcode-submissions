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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head: ListNode | null, val: number): ListNode {
        // Solution 2:- Recursion 
        if (head === null) return null;
        head.next = this.removeElements(head.next, val);
        return head.val !== val ? head : head.next;
    }
}
