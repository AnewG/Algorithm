var TrieNode = function() {
    this.iskey = false;
    this.children = [];    
};

var Trie = function() {

    this.root = new TrieNode();
    
    this.charKeyFromA = function(c){
        var a = 'a'.charCodeAt(0);
        return c.charCodeAt(0) - a;
    };

    this.searchWord = function(node, word, index, startsWith){

        if(word.length === index){
            if(!startsWith){
                return node.iskey;
            }else{
                return true;
            }
        }

        var c = word[index];
        var key = this.charKeyFromA(c);
        return !!(node.children[key] && this.searchWord(node.children[key], word, index+1, startsWith));
        
    };
};

Trie.prototype.insert = function(word) {
    var node = this.root;
    for(var i = 0; i < word.length; i++){
        var key = this.charKeyFromA(word[i]);
        if(!node.children[key]){
            node.children[key] = new TrieNode();
        }
        node = node.children[key];
    }
    node.iskey = true;
};

Trie.prototype.search = function(word) {
    return this.searchWord(this.root, word, 0, false);
};

Trie.prototype.startsWith = function(prefix) {
    return this.searchWord(this.root, prefix, 0, true);
};