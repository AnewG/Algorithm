/**

  Given an integer n, return the number of trailing zeroes in n!.

  Note: Your solution should be in logarithmic time complexity.

 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var x = 5;
    var ans = 0;
    while(n >= x){
        ans += Math.floor(n / x);
        x *= 5;
    }
    return ans;
};
