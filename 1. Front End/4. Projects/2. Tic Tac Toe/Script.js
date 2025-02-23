let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let gameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turn0=true;  // alternating tern playerX and player0....
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {            // boxex.forEach(function(box) {} );
    box.addEventListener("click",()=> {
        //console.log("Box was clicked.");
        if(turn0) {
            box.innerText="0";
            turn0=false;
        } else {
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner= () => {
    for(let pattern of winPattern) {
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos1val == pos2val && pos1val == pos3val ) {
            console.log('Congratulations, The Winner is: ', pos1val);
            showWinner(pos1val);
        }

    }
}
const showWinner=(winner) => {
    msg.innerText=`Congratulations, The winner is: ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}
const disableBoxes=()=> {
    for(let box of boxes) {
        box.disabled=true;
    }
}
const enableBoxes=()=> {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
let resetGame= () => {
    turn0=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}
gameBtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);
