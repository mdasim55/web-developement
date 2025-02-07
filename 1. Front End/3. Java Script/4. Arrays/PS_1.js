// For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class. 
let marks=[85,97,44,37,76,60];
let sum=0;
for(let i of marks) {
    sum=sum+i;
}
let avg=sum/marks.length;
console.log("The sum of the marks is: ",sum);
console.log("The average number of the marks is: ",avg);

// For a given array with prices off 5 itmes --> [250,645,300,900,50]. All itmes have an offrer of 10% OFF on them . Change the array to store final prices after applying the offer.
// Usingt for of loops -->
let prices=[250,645,300,900,50];
let i=0;
for(let val of prices) {
    let discount=val/10;
    prices[i]=prices[i]-discount;
    console.log(`Value after offer: =${prices[i]}`);
}

// Usingt for loops -->
// for(i=0;i<prices.length;i++) {
//     let discount=prices[i]/10;
//     let val=prices[i]-discount;
//     console.log(val);
// }