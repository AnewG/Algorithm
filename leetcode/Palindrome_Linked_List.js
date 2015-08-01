/**

  Target:

    Given a singly linked list, determine if it is a palindrome.
    
    Follow up:
    Could you do it in O(n) time and O(1) space?

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {

    function findMiddle(head){
        var p1 = head;
        var p2 = head;
        while(p2 && p2.next){
            p1 = p1.next;
            p2 = p2.next.next;
        }
        return p1;
    }

    function reverseLink(head){
        var p = null;
        while(head){
            var q = head.next;
            head.next = p;
            p = head;
            head = q;
        }
        return p;
    }
    

    var pMid = findMiddle(head);
    var pRev = reverseLink(pMid);           
    for(;head!=pMid; head=head.next, pRev=pRev.next) {
        if (head.val != pRev.val) {
            return false;
        }
    }

    return true;

};
