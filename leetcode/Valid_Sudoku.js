/**

Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    var i;
    var j;
    var temp;

	for(i = 0; i < 9; i++){
		temp = [];
		for(j = 0; j < 9; j++){
			if(board[i][j] == '.') continue;
			if(temp.indexOf(board[i][j]) != -1){
				return false;
			}else{
				temp.push(board[i][j]);
			}
		}
	}

	for(i = 0; i < 9; i++){
		temp = [];
		for(j = 0; j < 9; j++){
			if(board[j][i] == '.') continue;
			if(temp.indexOf(board[j][i]) != -1){
				return false;
			}else{
				temp.push(board[j][i]);
			}
		}
	}	

    function generateAndCheckMatrix(i, j){
    	var temp = [];
        for(var a = i; a <= i + 2; a++){
        	for(var b = j; b <= j + 2; b++){
        		if(board[a][b] == '.') continue;
        	    if(temp.indexOf(board[a][b]) != -1){
			    	return false;
			    }else{
			    	temp.push(board[a][b]);
			    }
        	}
        }    
        return true;
    }

    for(i = 0; i <= 6; i += 3){
    	for(j = 0; j <= 6; j += 3){
            var res = generateAndCheckMatrix(i, j);
            if(!res){
            	return false;
            }
    	}
    }

    return true;  
}
