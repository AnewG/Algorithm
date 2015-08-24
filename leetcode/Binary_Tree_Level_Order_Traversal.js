/**

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){ return []; }

    var layer = [root];
    var tmp_value = [root.val];
    var result_value = [];
    var flag = false;

    while(flag === false){
        result_value.push(tmp_value);
        var tmp = [];
        tmp_value = [];
        flag = true;
        for(var i = 0; i < layer.length; i++){
            if(layer[i].left){
                tmp.push(layer[i].left);
                tmp_value.push(layer[i].left.val);
                flag = false;
            }
            if(layer[i].right){
                tmp.push(layer[i].right);
                tmp_value.push(layer[i].right.val);
                flag = false;
            }
        }
        layer = tmp;
    }

    return result_value;
};
