/**

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = 0;
    while(x){
        res = res*10 +x%10;
        x = parseInt(x/10);
    }
    if(res> Math.pow(2,31) || -res>Math.pow(2,31)){
       res = 0;
    }
    return res;
};
