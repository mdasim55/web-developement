// Normal String....
let str="Apna College";
console.log(str[0]);            // A
console.log(str[5]);            // C
console.log(str[8]);            // l
console.log(str[11]);           // e

// Template Literals....
let specialString=`This is template literals ${1+2+3+4+5}`;
console.log(typeof specialString);
console.log(specialString);

// why is use Template lioterals.. for eg..
let obj={
    item:"pen",
    price:10,
};
console.log("The cost of ",obj.item," is ",obj.price," rupees.");
let output=`The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

// Escape Character
str="Apna\nCollege"
console.log(str.length);            // 12 --> \n is one character
console.log(str);
str="Apna\tCollege"                
console.log(str.length);            // 12 --> \t is one character
console.log(str);
