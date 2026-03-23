//The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value
//Using Function.prototype.bind(), you can create a new function with a specific value of this that doesn't change regardless of how the function is called. 
const module = {
  x: 42,
  getX() {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42