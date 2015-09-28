/**

Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    var flag = 0;
    for(var i = 0; i < len; i++){
        if(nums[i-flag] === val){
            nums.splice(i-flag,1);
            flag++;
        }
    }
    return nums.length;
};
