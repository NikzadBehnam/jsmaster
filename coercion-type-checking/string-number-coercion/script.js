let result = "5" + 2; // "52" (number 2 is coerced to a string)
let result2 = "5" - 2; // 3 (string "5" is coerced to a number)

const resultObj = {
  result1: result,
  result2: result2,
};

console.log(resultObj);
