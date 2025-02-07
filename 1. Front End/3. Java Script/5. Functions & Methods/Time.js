// 1. SetTimeout
let alram=function() {
    console.log('Wake up, Good Morning');
};
setTimeout(alram,4000);     // Here the time is miliSeconds

// let alram1= () => console.log('Wake up, Good Morning');
// console.log("Alram set.");
// let timerId=setTimeout(alram1,1000);     // Set timer return the timerId.
// console.log(`Alram set with timerId ${timerId}.`);
// clearTimeout(timerId);      // It cancel the setTimeOut.....

// 2. Set Interval....

let intervalId=setInterval(alram,2000);
clearInterval(intervalId);
