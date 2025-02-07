// 1. Questions
function numCheck(num) {
    if(num%2==0) {
        console.log("The number is even.")
    } else {
        console.log("The number is odd.")
    }
}
numCheck(5);

// 2. Question
function larger(num1,num2) {
    if(num1>num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(`The larger number is: ${larger(2,3)}`);

// 3. Question
function celToFaren(celcius) {
    let faren=(9/5)*celcius+32;
    return faren;
}
console.log(`The farenhite temperature is: ${celToFaren(42)}`);