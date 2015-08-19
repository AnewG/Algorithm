/**

  Given a binary tree, find its minimum depth.
  
  The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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
var minDepth = function(root) {
    
    if(!root){ return 0; }

    root.node = 1;
    var layer = [root];
    var flag = false;
    var result;
    
    while(flag === false){
        var tmp = [];
        for(var i = 0; i < layer.length; i++){
            if(layer[i].left === null && layer[i].right === null){
                return layer[i].node;
            }
            if(layer[i].left){
                layer[i].left.node = layer[i].node + 1;
                tmp.push(layer[i].left);
            }
            if(layer[i].right){
                layer[i].right.node = layer[i].node + 1;
                tmp.push(layer[i].right);
            }
        }
        layer = tmp;
    }
    
    return result;

};
