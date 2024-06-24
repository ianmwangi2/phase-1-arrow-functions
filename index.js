//divide
const divide = function(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  };

  // square
  const square = x => x * x;

  // add
  const add = (a,b) => a + b;