/**

The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	
    var s = '1';
    for(var i = 0; i < n-1; i++){
        var prev = '';
        var newS = '';
        var num = 0;
        for(var curr = 0; curr < s.length; curr++){
            if(prev !== '' && prev != s[curr]){
                newS += String(num) + prev;
                num = 1;
            }else{
                num += 1;
            }
            prev = s[curr];
        }
        newS += String(num) + prev;
        s = newS;
    }
    return s;
};
