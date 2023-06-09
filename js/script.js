//all tag list
let playerOneInput = document.querySelector(".player1-input"); //player-1 input
let playerOneBtn = document.querySelector(".player1-btn");     //player-1 button
let playerTwoInput = document.querySelector(".player2-input"); //player-2 input
let playerTwoBtn = document.querySelector(".player2-btn");     //player-2 button
let playerThreeInput = document.querySelector(".player3-input");//player-3 input
let playerThreeBtn = document.querySelector(".player3-btn");    //player-3 button
let playerFourInput = document.querySelector(".player4-input"); //player-4 input
let playerFourBtn = document.querySelector(".player4-btn");     //player-4 button
let error = document.querySelector(".error");   //games error
let player = document.querySelector(".player");  //games player
let chance = document.querySelector(".chance");  //games chance
let countHadding = document.querySelector(".count"); //count tag
let resetBtn = document.querySelector('.reset');//games reset tag
let list = document.querySelector(".list");//games list
let div = document.querySelector(".div")//overlay div

let count = 5;

let playerOneInputValue ="";
let playerTwoInputValue ="";
let playerThreeInputValue ="";
let playerFourInputValue ="";
//winer
// let player2Win=[];
// let player2Lose=[];
// let player3Win=[];
// let player3Lose=[];
// let player4Win=[];
// let player4Lose=[];
//player 1 btn click
playerOneBtn.addEventListener("click",()=>{
    if(!playerOneInput.value){
        error.innerHTML = 'please inter your number';
    }else{
        if(playerOneInput.value - 20){
            if(playerOneInput.value>10 || playerOneInput.value<1){
                error.innerHTML = "please inter a number between 1 to 10";
            }else{
                error.innerHTML = '';
                playerOneInputValue = playerOneInput.value;
                player.innerHTML = "player 2"
                chance.style.display = 'block'
                countHadding.innerHTML = count;
                playerOneInput.style.display = 'none'
                playerOneBtn.style.display = 'none'
                playerTwoInput.style.display = 'block'
                playerTwoBtn.style.display = 'block'
            }
        }else{
            error.innerHTML = 'please inter your number';
        }
    }
});
//player 2 btn click
playerTwoBtn.addEventListener("click",()=>{

    if(!playerTwoInput.value){
        error.innerHTML = 'please inter your number';
    }else{
        if(playerTwoInput.value - 20){
            if(playerTwoInput.value>10 || playerTwoInput.value<1){
                error.innerHTML = "please inter a number between 1 to 10";
            }
            else{
                if(count >=1){
                    error.innerHTML = '';
                    count--;
                    countHadding.innerHTML =count;
                    if(playerOneInput.value==playerTwoInput.value){
                        list.innerHTML +=`<li class="win">player-2 right number prees : ${playerTwoInput.value}</li>`;
                        let winCls= document.querySelectorAll(".win");
                        let winArray =Array.from(winCls);
                        player2Win.push(winArray)
                        winArray.map(winItem=>{
                            winItem.style.background= 'green'
                        })
                        playerTwoInputValue=playerTwoInput.value
                    }
                    else{
                        list.innerHTML +=`<li class="loss">player-2 rong number prees : ${playerTwoInput.value}</li>`;
                        let lossCls = document.querySelectorAll(".loss");
                        let lossArray = Array.from(lossCls);
                        player2Lose.push(lossArray)
                        lossArray.map(lossItem=>{
                            lossItem.style.background= 'red'
                        })
                    }
                    if(count==0){
                        count =5;
                        countHadding.innerHTML =count;
                        player.innerHTML = "player 3"
                        playerTwoInput.style.display = 'none'
                        playerTwoBtn.style.display = 'none'
                        playerThreeInput.style.display = 'block'
                        playerThreeBtn.style.display = 'block'
                    }
                }
            }
            }else{
            error.innerHTML = 'please inter your number';
            }
        
    }
})

//player 3 btn click
playerThreeBtn.addEventListener("click",()=>{
    if(!playerThreeInput.value){
        error.innerHTML = 'please inter your number';
    }else{
        if(playerThreeInput.value - 20){
            if(playerThreeInput.value>10 || playerThreeInput.value<1){
                error.innerHTML = "please inter a number between 1 to 10";
            }
            else{
                if(count >=1){
                    error.innerHTML = '';
                    count--;
                    countHadding.innerHTML =count;
                    if(playerOneInput.value==playerThreeInput.value){
                        list.innerHTML +=`<li class="win">player-3 right number prees : ${playerThreeInput.value}</li>`;
                        let winCls= document.querySelectorAll(".win");
                        let winArray =Array.from(winCls);
                        player3Win.push(winArray)
                        winArray.map(winItem=>{
                            winItem.style.background= 'green'
                        });
                        playerThreeInputValue=playerThreeInput.value;
                    }
                    else{
                        list.innerHTML +=`<li class="loss">player-3 rong number prees : ${playerThreeInput.value}</li>`;
                        let lossCls = document.querySelectorAll(".loss");
                        let lossArray = Array.from(lossCls);
                        player3Lose.push(lossArray)
                        lossArray.map(lossItem=>{
                            lossItem.style.background= 'red'
                        })
                    }
                    if(count==0){
                        count =5;
                        countHadding.innerHTML =count;
                        player.innerHTML = "player 4"
                        playerThreeInput.style.display = 'none'
                        playerThreeBtn.style.display = 'none'
                        playerFourInput.style.display = 'block'
                        playerFourBtn.style.display = 'block'
                    }
                }

            }
        }else{
            error.innerHTML = 'please inter your number';
        }

    }
})

//player 4 btn click
playerFourBtn.addEventListener("click",()=>{
    if(!playerFourInput.value){
        error.innerHTML = 'please inter your number';
    }else{
        if(playerFourInput.value - 20){
            if(playerFourInput.value>10 || playerFourInput.value<1){
                error.innerHTML = "please inter a number between 1 to 10";
            }
            else{
                if(count >=1){
                    error.innerHTML = '';
                    count--;
                    countHadding.innerHTML =count;
                    if(playerOneInput.value == playerFourInput.value){
                        list.innerHTML +=`<li class="win">player-4 right number prees : ${playerFourInput.value}</li>`;
                        let winCls= document.querySelectorAll(".win");
                        let winArray =Array.from(winCls);
                        player4Win.push(winArray)
                        winArray.map(winItem=>{
                            winItem.style.background= 'green'
                        })
                        playerFourInputValue=playerFourInput.value
                    }else{
                        list.innerHTML +=`<li class="loss">player-4 rong number prees : ${playerFourInput.value}</li>`;
                        let lossCls = document.querySelectorAll(".loss");
                        let lossArray = Array.from(lossCls);
                        player4Lose.push(lossArray)
                        lossArray.map(lossItem=>{
                            lossItem.style.background= 'red'
                        })
                    }
                    
                    if(count==0){
                        error.innerHTML = '';
                        div.style.display='block';
                        chance.innerHTML ="games is over"
                        chance.classList.add("game-over")
                        playerFourInput.style.display = 'none'
                        playerFourBtn.style.display = 'none'
                        player.classList.add('hadding');
                        resetBtn.style.display = "inline-block"
                        chackFun()
                    }
                }
            }
        }else{
            error.innerHTML = 'please inter your number';
        }
    }
});
// condition cack funtion
const chackFun=()=>{
    if(playerOneInputValue == playerTwoInputValue && playerOneInputValue == playerThreeInputValue && playerOneInputValue == playerFourInputValue){
        player.innerHTML = "player 2 , player 3 and player 4 win";
    }
    else if(playerOneInputValue != playerTwoInputValue && playerOneInputValue == playerThreeInputValue && playerOneInputValue == playerFourInputValue){
        player.innerHTML = "player 3 and, player 4 win";
    }
    else if(playerOneInputValue == playerTwoInputValue && playerOneInputValue != playerThreeInputValue && playerOneInputValue == playerFourInputValue){
        player.innerHTML = "player 2 and, player 4 win";
    }
    else if(playerOneInputValue == playerTwoInputValue && playerOneInputValue ==playerThreeInputValue && playerOneInputValue != playerFourInputValue){
        player.innerHTML = "player 2 and, player 3 win";
    }
    else if(playerOneInputValue == playerTwoInputValue && playerOneInputValue != playerThreeInputValue && playerOneInputValue != playerFourInputValue){
        player.innerHTML = "player 2 win";
    }
    else if(playerOneInputValue != playerTwoInputValue && playerOneInputValue == playerThreeInputValue && playerOneInputValue != playerFourInputValue){
        player.innerHTML = "player 3 win";
    }
    else if(playerOneInputValue != playerTwoInputValue && playerOneInputValue != playerThreeInputValue && playerOneInputValue == playerFourInputValue){
        player.innerHTML = "player 4 win";
    }
    else{
        player.innerHTML = "player 1 is win "
    }
}
//reset button
resetBtn.addEventListener("click",()=>{
    location.reload()
})