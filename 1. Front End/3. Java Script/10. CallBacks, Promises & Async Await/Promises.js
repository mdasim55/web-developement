/*let promise=new Promise((resolve,reject)=> {
    console.log("I am a promise");
    // resolve(123);
    // resolve("Success");
    reject("Some error is occured");
});

// How to promise function in real world programming    ---->
function getData(dataId,getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log("Data: ",dataId);
            resolve("Success");
            if(getNextData) {
                getNextData();
            }
        })
    }, 10000);
}

// How to promise used in our code -->
const getPromise=()=> {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        resolve("Success");
        //reject("Error");
    });
}
let promise = getPromise();
promise.then((res)=> {
    console.log("Promise fulfiled",res);
})
promise.catch((err)=> {
    console.log("Rejected",err);
})
*/
// Promise Chain        --->>
function asynFuns() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("data 1");
            resolve("Success");
        },4000);
    });
}
function asynFuns2() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("data 2");
            resolve("Success_2");
        },4000);
    });
}
console.log("Fetching data 1....");
let p1=asynFuns();
p1.then((res)=> {
    console.log(res);
    console.log("Fetching data 2....");
    let p2=asynFuns2();
    p2.then((res)=> {
        console.log(res);
    })
});