/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var map = {}, visited = {}, visitedPath = {}, path = [];
    
    for(i = 0; i < numCourses; i++){
        map[i] = { index : i, next : [] };
    }
    
    for(i = 0; i < prerequisites.length; i++){
        map[prerequisites[i][1]].next.push(map[prerequisites[i][0]]);
    }
    
    for(i = 0; i < numCourses; i++){
        if(!visited[i]){
            if(!bfs(map[i])){
                return [];
            }    
        }        
    }
    return path;

    function bfs(node){
        var isVisited = visited[node.index];
        visited[node.index] = true;
        visitedPath[node.index] = true;
        if(node.next.length > 0){
            for(var i = 0; i < node.next.length; i++){
                if(visitedPath[node.next[i].index]){
                    return false;
                } 
                if(!bfs(map[node.next[i].index])){
                    return false;
                }
            }
        }
        if(!isVisited){
           path.unshift(node.index); 
        }
        visitedPath[node.index] = false;
        return true;
    }
};