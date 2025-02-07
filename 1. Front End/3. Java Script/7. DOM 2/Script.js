/*
let div = document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let para=document.querySelector("p");
console.log(para);
let para1=para.getAttribute("class")
console.log(para1);
*/
// Set Attribute....
let para=document.querySelector("p");
console.log(para.setAttribute("claqss","newClass"));

// Style Attribute for accesss........
let div=document.querySelector("div");
console.log(div);
console.dir(div);
div.style.backgroundColor="green";
div.style.fontSize="20px";
div.innerText="Hello!";
div.style.visibility="hidden";
