/**
 * Target

     Given two strings s and t, determine if they are isomorphic.
     
     Two strings are isomorphic if the characters in s can be replaced to get t.
     
     All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
     
     For example,
     Given "egg", "add", return true.
     
     Given "foo", "bar", return false.
     
     Given "paper", "title", return true.
     
     Note:
     You may assume both s and t have the same length.

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var len = s.length;
    var map = {};
    var targets = [];
    for(var i = 0;i < len; i++){
        var key = s[i];
        var target_value = t[i];
        if(typeof map[key] == 'undefined'){
            if(targets.indexOf(target_value) != -1){
                return false;
            }
            targets.push(target_value);
            map[key] = target_value;
        }
        if(map[key] != target_value){
            return false;
        }
    }
    return true;
};
