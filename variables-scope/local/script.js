function testScope() {
  var localVar = "I am local";
  console.log(localVar); // "I am local"
}

testScope();
console.log(localVar); // ReferenceError: localVar is not defined
