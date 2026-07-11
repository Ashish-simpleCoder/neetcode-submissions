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
        if (!head) {
            return null;
        }

        let dummy_list = new ListNode();
        dummy_list.next = head;

        let prev = dummy_list;
        let curr = head;

        while (curr) {
            const next = curr.next;

            if (curr.val == val) {
                prev.next = next;
            } else {
                prev = curr;
            }
            curr = next;
        }
        return dummy_list.next;
    }
}
