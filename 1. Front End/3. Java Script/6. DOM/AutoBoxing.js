/*
//1. Autoboxing.......>
console.log('Welcome to KG coding');
console.log('Welcome to KG coding'.length);         // Return the length of the string.
console.log('Welcome to KG coding'.toUpperCase());  // Return the string with capital letters.
console.log('Welcome to KG coding'.replace('KG','Knowledge Gate'));        // Replace the 'KG' to 'Knowledge Gate' 

// 2. Objects and reference.......
let x={
    num:5,
}
let y=x;
console.log(`x= ${x.num}, y= ${y.num}`);
x.num=10;
console.log(`x= ${x.num}, y= ${y.num}`);

// 3.Objects Comparision.....
let p={name: 'rakesh'};
let q={name: 'rakesh'};
console.log(p==q);
console.log(p===q);
*/
// 4. Objects Shortcuts.....>
let product={
    company: 'Apple',
    price: 10000,
    'Item-Name': 'T-shirt',
};
//1. Objects de-structureing....

// let {company}=product;
// console.log(company);

let {company,price}=product;
console.log(company);
console.log(price);
