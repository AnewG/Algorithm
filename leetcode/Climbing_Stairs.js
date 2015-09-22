/**

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    var fn_2 = 1;
    var fn_1 = 2;
    
    if(n < 1){
    	return 0;
    }
    
    if(n === 1){
        return fn_2;
    }
    
    if(n === 2){
        return fn_1;
    }
    
    var fn;
    for(var i =3; i <= n; i++){  
        fn = fn_2 + fn_1;  
        fn_2 = fn_1;  
        fn_1 = fn;  
    }
    
    return fn;  

};
