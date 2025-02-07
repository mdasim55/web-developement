// Under the if Comndition .....
// Falsy value are:--> false, 0, -0, BigInt 0n, "",null, undefined, NaN
// Truthy value are:--> true, 1,"0", " ", [], {}, function(){}....

// In function input many value --->
function calculatePrice(...num1) {
    return num1;
}
console.log(calculatePrice(20.50,61,73,55));

// Function without any return and {} --->
const addNumber=(num1,num2) => num1+num2;           // Here, Not required to write return function 
console.log(addNumber(3,2));
const addNumber2=(n1,n2) => n1+n2;        // Here, Not required to write return function  
console.log(addNumber2(10,10));

// But when we write {} in the function then return function is required to execute the code..
