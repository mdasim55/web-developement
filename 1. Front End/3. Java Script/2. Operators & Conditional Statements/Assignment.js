// Assignment Operators 
let a=5;
let b=2;
console.log("a+=4=",a+=4);           // a=a+4=9
console.log("a-=4=",a-=4);           // a=a-4=1
console.log("a*=4=",a*=4);           // a=a*4=20
console.log("a/=4=",a/=4);           // a=a/4=1
console.log("a**=4=",a**=4);         // a=a**4=625

// Comparison Operators
a=5;
b=2;
console.log("a==b", a==b);              // False
console.log("a!=b", a!=b);              // True
a=5;
b=5;
console.log("a==b", a==b);              // True
console.log("a!=b", a!=b);              // False

// Number and string
a=5;                // Number
b="5";              // Strings--> Number
console.log("a==b", a==b);              // True
console.log("a!=b", a!=b);              // False
a=5;                // Number
b="5";              // Strings--> Number
console.log("a==b", a===b);              // False
console.log("a!=b", a!==b);              // True

console.log("a>b=",a>b);                 // False
console.log("a>=b=",a>=b);               // True
console.log("a<b=",a<b);                 // False
console.log("a<=b=",a<=b);               // True
console.log("a=b=",a=b);                 // 