/**

  Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

  You may assume that the array is non-empty and the majority element always exist in the array.

 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(!nums){return null;}
    
    var map = {};
    var len = nums.length;
    for(var i = 0; i < len; i++){
        if(typeof map[nums[i]] == 'undefined'){
            map[nums[i]] = 1;
        }else{
            map[nums[i]] += 1;
        }
        if(map[nums[i]] > len / 2){
            return nums[i];
        }
    }
};
