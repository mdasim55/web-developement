// Sum function 
function sum(a,b) {
    return a+b;
}
// Sum Function using Arrow function-->
const arrowSum=(a,b)=> {
    console.log(a+b);
};

// Withoput input arai function 
const printHello=()=> {
    console.log("Hello!");
};

// If the parameter is single then not required for brackets....
let square = num => {
    return num*num;
}
console.log(square(5));

// If the function defination is one line code then not required the {} and the return ......example below..
square = num => num*num;
console.log(square(5));
console.log(square(25));