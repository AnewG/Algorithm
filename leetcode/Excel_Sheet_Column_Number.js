/**

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
    if(s === ''){return null;}
    
    var number = 0;  
    var temp = 0;  
    var len = s.length;
    for(var i = 0 ; i<len ; ++i){
        temp = s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;  
        number = number * 26 + temp;  
    }  
    return number; 
};
