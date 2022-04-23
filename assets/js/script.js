const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result =  document.querySelector(".result");
const startBtn = document.getElementsByClassName('btn-reload');
let list = [rock, paper, scissors]
let played = false
const randObj = {
    '1': rock,
    '2': paper,
    '3': scissors,
}
function player(){
    
    // let player =
    rock.addEventListener('click', () =>{
        rock.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        rock.style.pointerEvents = "none";
        delete randObj['1']
        paper.style.pointerEvents = "none";
        scissors.style.pointerEvents = "none";
    });
    paper.addEventListener('click', () =>{
        // paper.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        paper.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        paper.style.pointerEvents = "none";
        delete randObj['2']
        scissors.style.pointerEvents = "none";
        rock.style.pointerEvents = "none"
    });
    scissors.addEventListener('click', () =>{
        // scissors.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        scissors.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        scissors.style.pointerEvents = "none";
        delete randObj['3']
        rock.style.pointerEvents = "none"
        paper.style.pointerEvents = "none"
    });
}
function botPlayer(){
    
    const random = (min, max) => Math.floor(Math.random() * (max-min) + min);
    const randomNumber = random(1,4)    
    const item = randObj[randomNumber]
    // console.log(randomNumber)
    // console.log(randObj)
    if(randomNumber in randObj){
        // console.log("Key found")
    }
    else{
        botPlayer()
        // if player and bot have the same selection loop back
    }
    // console.log(item)
    item.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  #00FF00";
    item.style.pointerEvents = "none";          // make bot selection item unclickable/unchangeable
    return randomNumber
}

// function gamePlay(){
//     if()
// }

player()
list.forEach((element, playerSelection) => {
    element.onclick = ()=>{
        if(element.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue"){
            played = true
            if(played == true){
                console.log("Bot played")
                // console.log(element)
                let botSelection = botPlayer()
                // console.log(randObj)
                console.log(botSelection)
                console.log(playerSelection, " Human selection")
                // game play section

                if(playerSelection === 0 && botSelection === 2){
                    result.innerText = "Paper Cover's rock and wins"
                }
                if(playerSelection === 0 && botSelection === 3){
                    result.innerText = "Rock crushes scissors and wins"
                }
                if(playerSelection === 1 && botSelection === 1){
                    result.innerText = "Paper Cover's rock and wins"
                }
                if(playerSelection === 2 && botSelection === 1){
                    result.innerText = "Rock crushes scissors and wins"
                }
                // how to find selected items
            }
        }
    }
});
