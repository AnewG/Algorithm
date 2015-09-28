/**

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(s === null){
        return false;
    }
    
    var leftList  = ['(','{','['];
    var rightList = [')','}',']'];
    
    var Res = [];
    
    for(var i = 0; i < s.length; i++){
        var leftIdx = leftList.indexOf(s[i]);
        if(leftIdx != -1){
            Res.push(leftIdx);
        }
        var rightIdx = rightList.indexOf(s[i]);
        if( rightIdx != -1 ){
            if(Res.length === 0){
                return false;
            }
            if(Res[Res.length-1] == rightIdx){
                Res.pop();
            }else{
                return false;
            }
        }
    }
    
    if(Res.length){
        return false;
    }else{
        return true;
    }
    
};
