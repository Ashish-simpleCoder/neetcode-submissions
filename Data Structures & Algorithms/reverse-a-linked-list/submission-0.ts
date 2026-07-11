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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) {
            return null;
        }

        let newList = null;

        while (head) {
            let tmp = new ListNode(head.val);
            tmp.next = newList;
            newList = tmp;
            head = head.next;
        }

        return newList;
    }
}
