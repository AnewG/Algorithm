/**

  Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

  For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    if(n === 0){return 0;}
    
    var cnt = 0;
    while(Math.floor(n/2) !== 0){
        var res = Math.floor(n/2);
        var remain = n % 2;
        if(remain === 1){
            cnt++;
        }
        n = res;
    }
    
    if(n % 2 === 1){
        cnt++;
    }
    
    return cnt;
};
