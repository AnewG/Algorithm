/**

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.

 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var flag = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] != ' '){
            flag = 1;
            break;
        }
    }
    if(!flag){
        return 0;
    }
    var res = s.split(' ');
    for(var j = res.length - 1; j >= 0; j--){
        if(res[j].length){
            return res[j].length;
        }
    }
    return 0;
};
