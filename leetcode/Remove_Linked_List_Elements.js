/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var res = new ListNode(-1);
    res.next = head;
    var current  = head;
    var previous = res;
    while(current !== null){
        if(current.val === val){
            previous.next = current.next;
        }else{
            previous = current;
        }
        current = current.next;
    }

    return res.next;
};
