/**

  Rotate an array of n elements to the right by k steps.

  For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    var len, after;
    len = nums.length;
    k = k % len;
    after = nums.splice(-k, k);
    for(var i=k-1; i>=0 ;i--){
        nums.unshift(after[i]);
    }

};
