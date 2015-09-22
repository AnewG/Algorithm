/**

Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".

 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    function binaryPlus(a, b, c){
        if(a === 1 && b === 1){
            if(c){
                return [1,1];
            }else{
                return [1,0];
            }
        }else if((a === 1 && b === 0) || (a === 0 && b === 1)){
            if(c){
                return [1,0];  
            }else{
                return [0,1];
            }
        }else{
            if(c){
                return [0,1];
            }else{
                return [0,0];
            }
        }
    }
    
    function str_repeat(str, n){
        return new Array( n + 1 ).join( str );
    }
    
    var res = '';
    var part_1;
    var part_2;
    var isopsephy = 0;
    var maxLen;
    
    if(a.length > b.length){
        b = str_repeat('0',a.length - b.length) + b;
        maxLen = a.length;
    }else if(a.length < b.length){
        a = str_repeat('0',b.length - a.length) + a;
        maxLen = b.length;
    }else{
        maxLen = a.length;
    }
    
    for(var i = maxLen - 1; i >= 0; i--){

        part_1 = parseInt(a[i]);
        part_2 = parseInt(b[i]);
        var result = binaryPlus(part_1, part_2, isopsephy);
        isopsephy = result[0];
        res = result[1] + res;
    }
    
    if(isopsephy){
        return isopsephy + res;
    }else{
        return res;
    }
    
};
