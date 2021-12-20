/**
 * Solved Dec.17, 2021
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let t = head;
    let count = 0;
    while(t) {
        count++;
        t = t.next;
    }
        
    for(let i=1; i<=count / 2; i++) {
        head = head.next;
    }
    
    return head;
    
};