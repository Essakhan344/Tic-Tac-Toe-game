let buttons = document.querySelectorAll(".buttons");
let resetbutton = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector(".newgame");
let msg = document.querySelector("#winner")

let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


let turn0 = true;
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if(turn0){
            button.innerHTML = "O";
            turn0 = false;
        }else{
            button.innerHTML = "X";
            turn0 = true;
        }
        button.disabled = true;
        checkwinner();
    });
});

function checkwinner(){
    for(let pattern of winpattern){
        let pos1val = buttons[pattern[0]].innerHTML;
        let pos2val = buttons[pattern[1]].innerHTML;
        let pos3val = buttons[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
            };
        };
    };
};

function showwinner(winner){
    msg.innerHTML = `Winner is ${winner}`
    disablebtns();
}

function disablebtns(){
    for(let btn of buttons){
        btn.disabled = true;
    }
};

resetbutton.addEventListener("click", ()=>{
    turn0 = true;
    buttons.forEach((btn)=>{
        btn.disabled = false;
        btn.innerHTML = "";
        msg.innerHTML = "";
    });

});

newgamebtn.addEventListener("click", ()=>{
    turn0 = true;
    buttons.forEach((btn)=>{
        btn.disabled = false;
        btn.innerHTML = "";
        msg.innerHTML = "";
    });
})