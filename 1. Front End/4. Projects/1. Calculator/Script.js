let string="";              // It is a empty string...... 
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventsListerner('click',(e)=> {
        console.log(e.target);
    });
})