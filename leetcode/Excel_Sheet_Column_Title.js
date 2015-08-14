/**

  Given a positive integer, return its corresponding column title as appear in an Excel sheet.

  For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 

 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n < 0){ return ''; }
    var str = '';  
    while(n){  
        var r = n % 26;  
        n = Math.floor(n / 26);  
        if(r === 0){
            str += 'Z';  
            n--;  
        }else{  
            str += String.fromCharCode('A'.charCodeAt(0) + r-1);  
        }  
    }  
 
    var result = '';  
    for(var i=str.length-1; i>=0; i--){  
        result += str[i];  
    }  
    return result;  
    
};
