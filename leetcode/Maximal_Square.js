/**

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Return 4.

 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix.length === 0){
        return 0;
    }
    
    var m = matrix.length;
    var n = matrix[0].length;
    
    var dp = [];
    for(var i = 0; i < m; i++){
        var tmp = [];
        for(var j = 0; j < n; j++){
            tmp.push(0);
        }
        dp.push(tmp);
    }
    
    var ans = 0;
    
    for(i = 0; i < m; i++){
        for(j = 0; j < n; j++){
            dp[i][j] = parseInt(matrix[i][j]);
            if(i && j && dp[i][j]){
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
            ans = Math.max(ans,dp[i][j]);
        }
    }
    
    return ans * ans;
};
