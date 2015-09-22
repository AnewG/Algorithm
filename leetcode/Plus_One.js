/**

Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.

 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    var length = digits.length;
    for(var i = length-1; i>=0; i--){
        if(digits[i]<9){
            digits[i]++;
            break;
        }else{
            digits[i]=0;
        }
    }
    
    if(digits[0] === 0){
    	digits.unshift(1);
    }
    return digits;
};
