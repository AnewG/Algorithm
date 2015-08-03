/**
 * Target

     Given a sorted integer array without duplicates, return the summary of its ranges.
     
     For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    var len = nums.length;
    if(!len){
        return nums;
    }
    
    var flag = nums[0];
    var res = [];
    
    for(var i=0; i<len; i++){
        
        if(typeof nums[i+1] != 'undefined'){
            
            if(nums[i] !== nums[i+1] - 1){
                
                if(flag === nums[i]){
                    res.push(String(flag));
                }else{
                    res.push(flag + '->' + nums[i]);
                }
                
                flag = nums[i+1];
            
            }
            
        }else{
            
            if(nums[i] === flag){
                res.push(String(flag));
            }else{
                res.push(flag + '->' + nums[i]);
            }
            
        }
        
    }
    
    return res;
};
