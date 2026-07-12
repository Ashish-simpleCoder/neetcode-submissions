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
    middleNode(head: ListNode | null): ListNode {
        //  Solution 1:-  Tortoise & Hare Algorithm (Optimal solution)
        //  T(c):- O(n/2)
        //  S(c):- O(1)

        let slow = head;
        let fast = head;

        while (fast) {
            // This condition needed to satify the even length of linked list
            // step-1
            if (fast.next) {
                slow = slow.next;
            }

            // step-2 (old - step-1)
            fast = fast.next?.next;
            // Old step-2. Will fail for even length of linked list
            /*
            if(fast){
                slow = slow.next
            }
            */
        }

        return slow;
    }
}
