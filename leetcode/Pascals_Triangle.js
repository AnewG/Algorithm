/**

  Given numRows, generate the first numRows of Pascal's triangle.
  
  For example, given numRows = 5,
  Return
  
  [
       [1],
      [1,1],
     [1,2,1],
    [1,3,3,1],
   [1,4,6,4,1]
  ]

 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    if(!numRows){return [];}
    
    var res = [];
    
    for(var i = 0; i < numRows; i++){
        if(i === 0){
            res.push([1]);
            continue;
        }
        if(i === 1){
            res.push([1,1]);
            continue;
        }
        if(i === 2){
            res.push([1,2,1]);
            continue;
        }
        if(typeof res[i-1] != 'undefined'){
            var len = res[i-1].length;
            var tmp = [1];
            for(var j = 0; j < len - 1; j++){
                var a = res[i-1][j];
                var b = res[i-1][j+1];
                tmp.push(parseInt(a) + parseInt(b));
            }
            tmp.push(1);
            res.push(tmp);
        }
    }
    
    return res;
    
};
