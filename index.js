let boxs = document.querySelectorAll(".box");
let resetbtn  = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msg =document.querySelector("#msg");
let msgcon = document.querySelector(".msg-container");

let turn = true;

let winPatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn){
            box.innerText ='O'
            turn=false;
        }
        else{
            box.innerText='X'
            turn=true;
        }
        box.disabled =true;
        checkWinner();
    })
})
let reset =()=>{
    turn=true;
    enable();
  msgcon.classList.add("hide");
}

let disabl=()=>{
    for(let b of boxs){
        b.disabled=true;
    }
}
let enable=()=>{
    for(let b of boxs){
        b.disabled=false;
        b.innerText="";
    }
}

 const showWinner = (winner)=>{
    msg.innerText=`Congratulation, WINNER Is ${winner}`;
    msgcon.classList.remove("hide");
    disabl();

 }

const checkWinner=()=>{
    for(let patter of winPatter){
        let pos1Val =boxs[patter[0]].innerText;
         let pos2Val =boxs[patter[1]].innerText;
          let pos3Val =boxs[patter[2]].innerText;

          if(pos1Val!=""&&pos2Val!=""&& pos3Val!=""){
            if(pos1Val==pos2Val&& pos2Val==pos3Val){
                showWinner(pos1Val);
            }
          }
    }
}
newgame.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);