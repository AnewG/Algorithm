/**

Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

For example:
Given n = 13,
Return 6, because digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    if(n <= 0){
        return 0;
    }else if(n < 10){
        return 1;
    }
    var len = n.toString().length;
    var base = Math.pow(10, len - 1);
    var answer = parseInt(n / base);
    var remainder = n % base;
    var oneInBase = 0;
    if(answer === 1){
        oneInBase = n - base + 1;
    }else{
        oneInBase = base;
    }
    return countDigitOne(base - 1) * answer + oneInBase + countDigitOne(remainder);
};
