/*
// 1. Async function --->
async function hello() {
    console.log("Hello World!");
}
*/
// 2. Async and Await function.......>
function api() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("Weather data");
            resolve(200);
        },4000);
    })
}
async function gatWeather() {
    await api();
}