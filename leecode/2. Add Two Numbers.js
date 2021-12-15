/**
 * Solved Dec. 15, 2021
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let val = l1;
    let result = new ListNode(0);
    let current = result;

    for(;l1 || l2;) {
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next
        }
        current.next = new ListNode(sum % 10);
        current = current.next;
        sum > 9 ? sum = 1 : sum = 0
    }
    
    if (sum) {
        current.next = new ListNode(sum % 10);
    }
    
    
    return result.next;
    
};