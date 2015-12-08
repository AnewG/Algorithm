/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if( nums.length <= 0 ){
        return 0;
    }

    if( nums.length == 1 ){
        return nums[0];
    }

    var nums1 = nums.slice(1);
    nums.pop();

    var rob_base = function(nums) {
        
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

    return Math.max(rob_base(nums1), rob_base(nums));

};