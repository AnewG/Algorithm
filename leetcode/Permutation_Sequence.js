/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
	var nums = [];
    var total = 1;
    for(var i = 1;i <= n; i++){
    	total *= i;
    	nums.push(i);
    }
    
    var ret = "";
    k--;
    while(n > 0){
    	total /= n;
    	var index = k / total;
    	index = Math.floor(index);
    	var x = nums[index];
    	ret += x;
    	nums.splice(index,1);
    	k = k % total;
    	n--;
    }
    
    return ret;
}