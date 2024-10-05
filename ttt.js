let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".btn");

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
            }
    }
}}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") { // Check if the box is empty
      box.innerText = turn ? "X" : "O"; // Alternate between "X" and "O"
      turn = !turn; // Switch turns
      console.log("hiiiii");
    }
    checkWinner();
  });
});