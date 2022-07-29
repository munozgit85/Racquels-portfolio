// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 52;
var expression1 = x > 25;
var expression2 = x > 50;

// TODO: Write Your JavaScript Code Here

// If both expression1 and expression 2 variables are TRUE, then log out "True True" 

if (expression1 === true && expression2 === true){
console.log("true  ✅  x true  ✅ ");
}else if (expression1 === true) {
    //But if only expression1 is TRUE, then log out "True False"
    console.log("true  ✅  False ❌ ");    
} else if (expression2 === true) {
//But if only expression2 is TRUE, then log out "False True"
console.log("False ❌  x true  ✅ ");
} else if (expression1 === false && expression2 === true){
// OTHERWISE, log out "False False" 
console.log("False ❌ False ❌ ");
}