// If-alternatives statements.....

// 1. Ternary operator..--->

// 2. Guard Operator     --->
//let age=21;
//let age;
let age=0;
let finalAge=(age || 18);
console.log(age);
console.log(finalAge);      // Here age value is 0 then th finalage is 18.

// 3. Default operator...
let age1;
age1=0;
finalAge=(age1 ?? 18);
console.log(age);
console.log(finalAge);      // Here age value is 0 then th efinal is 0.
