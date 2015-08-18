/**

  Write a program to find the node at which the intersection of two singly linked lists begins.
  
  
  For example, the following two linked lists:
  
  A:          a1 → a2
                     ↘
                       c1 → c2 → c3
                     ↗            
  B:     b1 → b2 → b3
  
  begin to intersect at node c1.

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
        if (!headA || !headB) {
            return null;
        }
        
        var pA = headA;
        var pB = headB;
        
        var tailA = null;
        var tailB = null;
        
        while (true) {
            
            if (pA === null) {
                pA = headB;
            }
            
            if (pB === null) {
                pB = headA;
            }
            
            if (pA.next === null) {
                tailA = pA;
            }
            
            if (pB.next === null) {
                tailB = pB;
            }
            
            if (tailA !== null && tailB !== null && tailA !== tailB) {
                return null;
            }
            
            if (pA == pB) {
                return pA;
            }
            
            pA = pA.next;
            pB = pB.next;
        }
        
};
