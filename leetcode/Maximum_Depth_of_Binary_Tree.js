/**

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if(!root){ return 0; }

    root.node = 1;
    var layer = [root];
    var flag = false;
    var last_node = 1;

    while(flag === false){
        var tmp = [];
        flag = true;
        for(var i = 0; i < layer.length; i++){
            if(layer[i].left){
                layer[i].left.node = layer[i].node + 1;
                tmp.push(layer[i].left);
                flag = false;
            }
            if(layer[i].right){
                layer[i].right.node = layer[i].node + 1;
                tmp.push(layer[i].right);
                flag = false;
            }
        }
        if(flag === false){
            last_node++;
        }
        layer = tmp;
    }

    return last_node;
};
