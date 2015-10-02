/**

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Hint:

Try to utilize the property of a BST.

What if you could modify the BST node's structure?

The optimal runtime complexity is O(height of BST).

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var count = 0;
    var isFound = false;
    var res = null;
    inorder(root);
    return res;

    function inorder(node){
        if(node !== null && !isFound){
            inorder(node.left);
            count++;
            if(count === k){
                res = node.val;
                isFound = true;
                return;
            }
            inorder(node.right);
        }
    }
};
