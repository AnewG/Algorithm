 /**

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

  * @param {number[]} nums
  * @return {number[]}
  */
var majorityElement = function(nums) {
    var i = 0, res = null, trinity = [], curr = null; 
    var result = [];
    for(i = 0; i < nums.length; i++){
        curr = nums[i];
        res = isInTrinity(curr, trinity);
        if(res !== -1){
            trinity[res].count++;
        }else{
            if(trinity.length <= 1){
                trinity.push({key : curr, count : 1});
            }else{
                trinity[1].count--;
                if(trinity[1].count === 0){
                    trinity.pop();
                }
                trinity[0].count--;
                if(trinity[0].count === 0){
                    trinity.shift();
                }
            }
        }
    }    
    if(trinity[0]){
        verifyNum(trinity[0].key, result);
    }
    if(trinity[1]){
        verifyNum(trinity[1].key, result);
    }
    return result;
    
    function verifyNum(num, result){
        var count = 0;
        for(i = 0; i < nums.length; i++){
            if(nums[i] === num){
                count++;
            }
        }
        if(count > nums.length / 3){
            result.push(num);
        }
    }
    function isInTrinity(num, trinity){
        for(var i = 0; i < trinity.length; i++){
            if(trinity[i].key === num){
                return i;
            }
        }
        return -1;
    }
};
