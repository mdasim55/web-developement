// For of loop for strings.....
let str="HelloWorld!";
let size =0;
for(let i of str) {                 // iterator-->character
    console.log("c=",i);
    size++;
}
console.log("The sizeof array is: ",size);

// For in loop for objects.....
let student= {
    Fname :"Korim Saheb",
    age:20,
    cgpa:7.5,
    isPass:true,
};
for(let key in student) {
    console.log("Key=",key," value=",student[key]);
}