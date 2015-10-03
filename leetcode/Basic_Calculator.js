/**

Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

You may assume that the given expression is always valid.

Some examples:
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
Note: Do not use the eval built-in library function.

 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var resultStack = [];
    var opStack = [];
    var temp = "";
    for(var i = 0; i < s.length; i++){
        var ch = s[i];
        if(/^(\+|\-)$/.test(ch)){ // + -
            compress_2operators();
            opStack.push(ch);
        } else if (ch === '('){
            opStack.push(ch);
        } else if (ch === ')'){
            compress_bracket();
        } else if (/^[0-9]$/.test(ch)){
            temp += ch;
        }

        if(s[i + 1] && /^(\+|\-|\(|\))$/.test(s[i + 1])){ // + - ( )
            if(temp !== ""){
                resultStack.push(parseInt(temp));
                temp = "";
            }
        }
    }
    if(temp !== ""){
        resultStack.push(parseInt(temp));
        temp = "";
    }
    compress_2operators();
    return resultStack.pop();

    function compress_bracket(){
        while(opStack[opStack.length - 1] !== '('){
            compress_2operators();
        }
        opStack.pop(); //(
    }
    function compress_2operators(){
        while(/^(\+|\-)$/.test(opStack[opStack.length - 1])){ // + -
            var op = opStack.pop();
            var right = resultStack.pop();
            var left = resultStack.pop();
            if(op === '+'){
                resultStack.push(left + right);
            }else{
                resultStack.push(left - right);
            }
        }
    }
};
