// let btn1=document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a=35;
//     let b=20;
//     console.log(a+b);
// }
// let div=document.querySelector("div");
// div.onmouseover=()=> {
//     console.log("You are inside div.");
// }
// let btn2=document.querySelector("#btn2");
// btn2.ondblclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// }

// -----> Add Events Listeners...
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click", (e) => {
    console.log("Button 1 was clicked-- handler 1");
    //console.log(e);
    //console.log(e.type);
    //console.log(e.target);
   // console.log("Button 1 is onc more times clicked");
});
btn1.addEventListener("click", () => {
    //console.log("Button 1 was clicked"); 
    console.log("Button 1 is onc more times clicked__ this is a handler 2");
});
// btn1.addEventListener("click", () => {
//     console.log("Button 1 is onc more times clicked__ this is a handler 3");
// });
const handler3=()=> {
    console.log("This is a handler 3.");
}
btn1.addEventListener("click",handler3);                // It is a anothe type a function

btn1.addEventListener("click", () => {
    console.log("Button 1 is onc more times clicked__ this is a handler 4");
});

// Remove the handler 3 
btn1.removeEventListener("click",handler3);
