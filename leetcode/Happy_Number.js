/**

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var res = [];
    while(res.indexOf(n) == -1){
        var string_num = String(n);
        var len = string_num.length;
        var tmp = 0;
        for(var i = 0; i < len; i++){
            tmp += string_num[i] * string_num[i];
        }
        if(tmp === 1){
            return true;
        }
        res.push(n);
        n = tmp;
    }
    return false;
};
