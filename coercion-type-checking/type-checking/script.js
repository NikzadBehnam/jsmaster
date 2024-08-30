console.log("Hello", typeof "Hello"); // "string"
console.log(42, typeof 42); // "number"
console.log(true, typeof true); // "boolean"
console.log({}, typeof {}); // "object"
console.log([], typeof []); // "object" (arrays are objects)
console.log(function () {}, typeof function () {}); // "function"
console.log(undefined, typeof undefined); // "undefined"
console.log(null, typeof null); // "object" (null is an object type due to a historical bug in JavaScript)
