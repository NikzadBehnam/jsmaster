function myFunction() {
  var functionVar = "I am function scoped";
  console.log(functionVar); // Accessible here, Output: I am function scoped
}

myFunction();
console.log(functionVar); // Error: functionVar is not defined
