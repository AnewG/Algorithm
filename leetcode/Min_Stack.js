/**

  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
  
  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  getMin() -- Retrieve the minimum element in the stack.

 * @constructor
 */
var MinStack = function() {
    this.min = null;
    this.minStack = [];
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    if(this.minStack.length !== 0){
        if(this.minStack[this.minStack.length - 1] >= x){
            this.minStack.push(x);
        }
    }else{
        this.minStack.push(x);
    }
    this.stack.push(x);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var x = this.stack.pop();
    if(this.minStack.length !== 0){
        if(this.minStack[this.minStack.length - 1] === x){
            this.minStack.pop();
        }
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    if(typeof this.minStack[this.minStack.length - 1] == 'undefined'){
        return 0;
    }else{
        return this.minStack[this.minStack.length - 1];
    }
};
