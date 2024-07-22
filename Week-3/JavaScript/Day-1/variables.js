//data types
//Primitive types
// 1.Number
// 2.String
// 3.Boolean
// 4.undefined
// 5.null
// 6.Symbol
// 7.bigInt

//Non-primitive
// 1.Arrays
// 2.Object
// 3.Function
// 4.Date
// 5.RegExp
// 6.Math

//It is a dynamically typed programming language
//That means it automatically recognizes the type of the variable
// a = "Uday"
// console.log(typeof(a));

//let and const are block scoped variables
//var is a function scoped variable

// { //a block
// let a=9
// const b= 10
// var c=11
// }
// console.log(c); //Only c executes outside of a block

// function show(){
//     var a=9;
// }
// console.log(a) //var cannot be executed outside of a function

//difference b/w let and const
let a = 9;
a = 10;  //in let, we can re-initilize the value in the same variable
const b = 8;
b = 9; //but not in const
console.log(a);
console.log(b);