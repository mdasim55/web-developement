/*
// 1. Set Timeout Function  --->
function hello() {
    console.log("Hello");
}
setTimeout(hello,4000);         // 4000 mili Second = 4 second

// 2. Asynchronous Programming --->>
console.log("Hello 1");
console.log("Hello 2");
setTimeout(()=> {
    console.log("Hello World!");        // it execute in the last
},4000);
console.log("Hello 3");
console.log("Hello 4");

// 3. CallBack      ----->
function sum(a,b) {
    console.log(a+b);
}
function calculator(a,b,sumCallback) {
    sumCallback(a,b);
};
calculator(1,2,sum);
// Other method to define the same functoin....
calculator(1,2,(a,b)=> {
    console.log(a+b);
});
*/
// 4. Function get Data  -->
function getData(dataId,getNextData) {
    setTimeout(()=> {
        console.log("Data: ",dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}
// 5> CallBack Hell --->       This is also called nested callBack 
getData(1,()=> {
    console.log("Getting data 2...");
    getData(2,()=> {
        console.log("Getting data 3...");
        getData(3,()=> {
        console.log("Getting data 4...");
            getData(4);
        })
    })
});
