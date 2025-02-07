function myFunction() {                          // Function Defination
    console.log("Hello World!");
    console.log("Welcome to apna college..");
    console.log("We are learning java script language..");
}

// Function call
myFunction();
myFunction();
myFunction();
myFunction();

// Function with input --->
function myFunction1(msg,n) {
    console.log(msg);
    console.log(n);
}

myFunction1("Hello World!", 100);
myFunction1("I don`t lov java script", 500);

// Sum of two numbers
function sum(a,b) {
    s=a+b;
    console.log("Before return S");
    return s;
    console.log("After return S");          // The Line wiil not be execute 
}
let val=sum(3,4);
console.log("The sum of two number is : ",val)                                      