/**

Write a function to find the longest common prefix string amongst an array of strings.

 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var prefix = '';  

    if(strs.length === 0) return prefix;

    var len =0;

    while(1){

        var letter;  
        var i=0;

        for(; i < strs.length; i++){  
            if(i === 0) letter =strs[0][len];  
            if(strs[i].length == len || letter != strs[i][len])  
            break;  
        }

        if(i!= strs.length)  
            break;

        len++;
        prefix += letter;  
    }  

    return prefix; 
};
