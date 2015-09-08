/**

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
   
    if(root === null){
        return true;
    }  
    
    function isSym(left, right){  
        
        if(left === null){
            return right === null;
        }
        
        if(right === null){
            return left === null;
        }  
      
        if(left.val != right.val){
            return false;
        }
      
        if(!isSym(left.left, right.right)){
            return false;  
        }  
            
        if(!isSym(left.right, right.left)){
            return false;  
        }
      
        return true;  
    }
    
    return isSym(root.left, root.right);
};
