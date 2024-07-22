//vanilla js                      ecma js
//only var                   only let and const

//function types:- 1.parametarized and 2.non-parametarized
// function show(){
//     console.log('show function');
// }
// show();

// function show(name){
//     console.log(`The name is ${name}`);
// }
// show('Uday')

// const a=()=>{   //This is actually not a real function, it is a variable
//     console.log('Arrow function');
// }
// a();

//immediate invoke function
// (function show(){
//     console.log('Hello')
// })()

// const a=(()=>{
//     console.log('Hello');
// })()

function outer(){
    let a=9;
    console.log('Outer function');
    function inner(){
        let b=10;
        console.log('Inner function', a,b);
    }
    return inner()
}
// outer()
// console.log(outer());  //it prints default value. To avoid this, we need to use return
outer()()
