/**
 * Target

      Follow up for "Remove Duplicates":
      What if duplicates are allowed at most twice?
      
      For example,
      Given sorted array nums = [1,1,1,2,2,3],
      
      Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    var len = nums.length;
    if(len <= 2){return len;}

    var pos = 0;
    var cnt = 1;
    
    for(var i = 1; i < len; i++){
        if(nums[i] == nums[pos]){
            cnt++;
            if(cnt == 2){
                nums[++pos] = nums[i];
            }
        }else{
            cnt = 1;
            nums[++pos] = nums[i];
        }
    }
    
    return pos + 1;
    
};
