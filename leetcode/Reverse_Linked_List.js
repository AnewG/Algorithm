/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(!head){return null;}
    
    var prev = null;
    var node = head;
    var last_next = head.next;
    
    while(last_next){
        node = last_next;
        last_next = node.next;
        node.next = head;
        if(prev === null){head.next = null;prev = 1;}
        head = node;
    }
    
    return node;
};
