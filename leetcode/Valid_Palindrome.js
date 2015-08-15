/**

  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
  
  For example,
  "A man, a plan, a canal: Panama" is a palindrome.
  "race a car" is not a palindrome.
  
  Note:
  Have you consider that the string might be empty? This is a good question to ask during an interview.
  
  For the purpose of this problem, we define empty string as valid palindrome.

 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    var i = 0; 
    var j = s.length - 1; 
    s = s.toLowerCase();

    if (s.length === 0) {
        return true;
    }

    while (i < j) {

        if (/[^a-zA-Z0-9]/.test(s[i])) {
            i++;
            continue;
        }

        if (/[^a-zA-Z0-9]/.test(s[j])) {
            j--;
            continue;
        }

        if (s[i] != s[j]) {
            return false;
        }

        i++;
        j--;
    }
    return true;
};
