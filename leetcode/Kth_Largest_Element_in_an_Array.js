/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    return findK(nums, nums.length-k, 0, nums.length-1);
    
    function findK(nums, k, i, j) {
        if(i>=j) return nums[i];
        var m = partition(nums, i, j);
        if(m==k) return nums[m];
        else if(m<k) {
            return findK(nums, k, m+1, j);
        } else {
            return findK(nums, k, i, m-1);
        }
    }
    
    function partition(nums, i, j) {

        var x = nums[i];
        var m = i;
        var n = i + 1;
        
        while(n<=j){
            if(nums[n]<x) {
                swap(nums, ++m, n);
            }
            ++n;
        }
        swap(nums,i, m);
        return m;
    }
    
    function swap(nums, i, j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

};