let sum=function (num1,num2) {
    return num1+num2;
}
console.log(sum(3,4));
let newSum=sum;
console.log(newSum(5,7));

// Parameter arguments is function...
let sumThreeNumbers=function(num1,num2,num3,sumTwoNumbers) {
    let sum1=sumTwoNumbers(num1,num2);
    return sumTwoNumbers(sum1,num3);
}
console.log(sumThreeNumbers(1,2,3,sum));

// We want to see the defination of function...
console.log(sumThreeNumbers);
console.log(typeof sumThreeNumbers);
