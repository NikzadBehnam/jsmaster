let fullName = "John";
let allowed = false;

// Falsy
if (allowed) {
  console.log(
    "this won't run because allowed is false and flase is a falsy value"
  );
}

//  Truthy
if (fullName) {
  console.log("this will run because fullName is a string");
}

// Falsy
if ("") {
  console.log("This won't run because empty string is falsy.");
}

// Falsy
if (undefined) {
  console.log("This won't run because undefined is falsy.");
}

// Truthy
if (42) {
  console.log("This will run because 42 is truthy.");
}
