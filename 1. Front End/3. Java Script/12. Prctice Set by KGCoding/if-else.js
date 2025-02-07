let age=1;
let gender="Female";
let finalDiscount;

if(age<=5) {
    finalDiscount=100;
} else if(gender=='Female' || age<=8) {
    ticket=100-(100*50/100);
} else if(gender=='Female') {
    finalDiscount=50;
} else if(age>=65) {
    finalDiscount=30;
} else {
    finalDiscount=0;
}
console.log(`Your final discount is: ${finalDiscount}`);