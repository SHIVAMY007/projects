let boxes = document.querySelectorAll(".box");

let newGameBtn=document.querySelector(".btn")
let msgContainer=document.querySelector(".notify")
let Container=document.querySelector(".container")
// let msg=document.querySelector("#msg")

let turn = true; // Use a single variable to track the turn

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const newGame=()=>{
  turn=true;
  enableBoxes();
  msgContainer.classList.add("hide");
  newGameBtn.classList.add("hide");
  document.body.style.backgroundColor = `#4e8397`;
}
const showWinner=(winner)=>{
  msgContainer.innerText=` Player ${winner} wins!`
  msgContainer.classList.remove("hide");
  disableBoxes();
  newGameBtn.classList.remove("hide");
  document.body.style.backgroundColor = `#c4fcef`;

}
const checkWinner=()=>{
    for (let patterns of winPatterns){
        // console.log(patterns)
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText,
        //     boxes[patterns[1]].innerText,
        //     boxes[patterns[2]].innerText);

            let pos1val=boxes[patterns[0]].innerText;
            let pos2val=boxes[patterns[1]].innerText;
            let pos3val=boxes[patterns[2]].innerText;
            if(pos1val!="" && pos2val!="" && pos3val!=""){
                if(pos1val==pos2val && pos2val==pos3val){
                    console.log("Winner",pos1val)
                    
                    showWinner(pos1val);
                    return;
            }
    }
}

if (Array.from(boxes).every((box) => box.innerText !== "")) {
  msgContainer.classList.remove("hide");
  msgContainer.innerText = "It's a tie!";
  newGameBtn.classList.remove("hide");
  document.body.style.backgroundColor = `rgb(195, 235, 221)`;
}
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (box.innerText === "") { // Check if the box is empty
    //   box.innerText = turn ? "X" : "O"; 
    // turn = !turn;
    if(turn){
        box.innerText="X"
        turn = false;
        box.style.setProperty('color', 'blue');
        
    }else{
        box.innerText="O"
        
        box.style.setProperty('color', 'red');
        turn = true; // Switch turns
    }
      
    }
    checkWinner();
    
  });
});
newGameBtn.addEventListener("click",newGame);