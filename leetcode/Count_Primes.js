/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    function isPrime(n){
        for(var i = 2; i * i <= n; i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;
    }
    
    if(n <= 2){
        return 0;
    }
    
    nums = 0;
    for(var i = 2; i < n; i++){
        if(isPrime(i)){ nums++; }
    }
    return nums;
};
