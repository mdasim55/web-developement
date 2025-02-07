// let arr=[1,2,3,4,5];

// arr.forEach(function(num) {
//     console.log(num);
// });
// // It can be written as......
// arr.forEach((num) => console.log(num));

// 2. Array Methods...
let array=[1,2,3,4,5,6,7,8,9];
let odds=arr.filter((num,index)=> {
    if(num%2===1) {
        return true;
    } else {
        return false;
    }
});
console.log(odds);