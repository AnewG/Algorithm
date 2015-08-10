/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var string_number = (+n).toString(2);
    if(string_number.length < 32){
        string_number = Array(33 - string_number.length).join("0") + string_number;
    }
    var reverse_string = string_number.split("").reverse().join("");
    return parseInt(reverse_string, 2);
};
