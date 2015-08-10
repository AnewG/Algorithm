/**

  You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if (nums.length <= 1){
        return nums.length ? nums[0] : 0;
    }
    
    var dp = [nums[0], Math.max(nums[0], nums[1])];
    var len = nums.length;
    
    for (var i = 2; i < len; ++i) {
        dp.push(Math.max(nums[i] + dp[i - 2], dp[i - 1]));
    }
    return dp.pop();
};
