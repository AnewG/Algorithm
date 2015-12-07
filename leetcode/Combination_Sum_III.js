/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var ans = [];
    function search(start, cnt, sums, nums){
        if(cnt > k || sums > n){
            return;
        }
        if(cnt == k && sums == n){
            ans.push(nums);
            return;
        }
        for(var x = start + 1; x < 10; x++){
        	var newArray = nums.slice();
            newArray.push(x);
        	search(x, cnt + 1, sums + x, newArray);
        }
    }
    search(0, 0, 0, []);
    return ans;
};