/**
 * Target

     Given an array of integers and an integer k, find out whether there there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.

 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   
     var map = {};
     var len = nums.length;

     for (var i=0; i<len; i++) {
         var value = nums[i];
         if(typeof map[value] == 'undefined'){
             map[value] = [];
         }
         if (map[value].length > 0 && i - map[value][map[value].length - 1] <= k) {
             return true;
         }
         map[value].push(i);
     }
     return false;
};
