/**

Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var res = parseInt(str);
    if(res > 2147483647){
        res = 2147483647;
    }else if(res < -2147483648){
        res = -2147483648;
    }
    return isNaN(res) ? 0 : res;
};
