/**

Determine whether an integer is a palindrome. Do this without extra space.

 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x < 0){
        return false;
    }
    if(x < 10){
        return true;
    }
    var string_x = x.toString();
    var i;
    var j;
    for(i = 0,j = string_x.length - 1; j >= i; i++,j--){
        if(string_x[i] != string_x[j]){
            return false;
        }
    }
    return true;
};
