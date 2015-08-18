/**

  Given an index k, return the kth row of the Pascal's triangle.
  
  For example, given k = 3,
  Return [1,3,3,1].
  
  Note:
  Could you optimize your algorithm to use only O(k) extra space?

 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
 
    if(rowIndex < 0){return [];}
    if(rowIndex === 0){return [1];}
    if(rowIndex === 1){return [1,1];}
    if(rowIndex === 2){return [1,2,1];}
    
    var res = [1,2,1];
    
    for(var i = 2; i < rowIndex; i++){
        var len = res.length;
        var tmp = [1];
        for(var j = 0; j < len - 1; j++){
            var a = res[j];
            var b = res[j+1];
            tmp.push(parseInt(a) + parseInt(b));
        }
        tmp.push(1);
        res = tmp;
    }
    
    return res;

};
