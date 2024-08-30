var globalVar = "I am global";

function checkScope() {
    console.log(globalVar); // "I am global"
}

checkScope();
console.log(globalVar); // "I am global"
