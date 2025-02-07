// Qs. Create a toggle button that changes the screen to dark-mode when clicked & and light mode when clicked again.

// 1st Method
// let modeBtn=document.querySelector("#mode");
// let currentMode="light";
// modeBtn.addEventListener("click",()=> {
//     console.log("You are trying to change the mode.");
//     if(currentMode==="light") {
//         currentMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     } else {
//         currentMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currentMode);
// });


// 2nd Methods......
let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currentMode="light";
modeBtn.addEventListener("click",()=> {
    console.log("You are trying to change the mode.");
    if(currentMode==="light") {
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currentMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
});