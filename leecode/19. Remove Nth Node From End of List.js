/**
 * Solved Dec. 23, 2021
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
        let cursor = head;
        let length = 0;
        while(cursor) {
            length++;
            cursor = cursor.next;
        }
        let pointer = new ListNode(0);
        pointer.next = head;
        cursor = pointer;
        for(let i=0; i<length - n ; i++) {
            cursor = cursor.next;
        }
        if(cursor.next) {
            cursor.next = cursor.next.next;   
        } else {
            cursor.next = null;
        }

        return pointer.next;

};