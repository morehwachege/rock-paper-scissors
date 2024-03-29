const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.querySelector(".result");
const restartBtn = document.querySelector('.btn-reload');
let list = [rock, paper, scissors]
let played = false
const randObj = {
    '1': rock,
    '2': paper,
    '3': scissors,
}


class DuoPlayerGame {
    constructor() {

    }
    duoPlayerOne() {
        let rockClicked = false
        let paperClicked = false
        let scissorsClicked = false
        rock.addEventListener('click', () => {
            rock.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
            rock.style.pointerEvents = "none";
            delete randObj['1']
            paper.style.pointerEvents = "none";
            scissors.style.pointerEvents = "none";
            this.duoPlayerTwo()
        });
        paper.addEventListener('click', () => {
            paper.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
            paper.style.pointerEvents = "none";
            delete randObj['2']
            scissors.style.pointerEvents = "none";
            rock.style.pointerEvents = "none"
            this.duoPlayerTwo()
        });
        scissors.addEventListener('click', () => {
            scissors.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
            scissors.style.pointerEvents = "none";
            delete randObj['3']
            rock.style.pointerEvents = "none"
            paper.style.pointerEvents = "none"
            // console.log(randObj)
            scissorsClicked = true
            this.duoPlayerTwo()
        });
        // check clicked items 

    }
    duoPlayerTwo() {
        // allow only two player inputs only
        Object.keys(randObj).forEach(key => {
            randObj[key].style.pointerEvents = "auto"
            randObj[key].addEventListener("click", () => {

                // console.log("clicked", randObj)
                Object.keys(randObj).forEach(anotherKey => {
                    randObj[anotherKey].style.pointerEvents = "none"
                    // console.log(randObj[anotherKey] ===  rock)
                    // this.play()
                    if (randObj[anotherKey] === rock) {
                        result.innerText = "Scissors Win"
                        result.style.color = "lime"
                    }
                    if (randObj[anotherKey] === paper) {
                        result.innerText = "Rock Wins"
                        result.style.color = "lime"
                    }
                    if (randObj[anotherKey] === scissors) {
                        result.innerText = "Paper Wins"
                        result.style.color = "lime"
                    }
                    // return randObj[anotherKey]
                });

            })
        })
    }
}


function player() {
    rock.addEventListener('click', () => {
        rock.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        rock.style.pointerEvents = "none";
        delete randObj['1']
        paper.style.pointerEvents = "none";
        scissors.style.pointerEvents = "none";
    });
    paper.addEventListener('click', () => {
        paper.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        paper.style.pointerEvents = "none";
        delete randObj['2']
        scissors.style.pointerEvents = "none";
        rock.style.pointerEvents = "none"
    });
    scissors.addEventListener('click', () => {
        scissors.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        scissors.style.pointerEvents = "none";
        delete randObj['3']
        rock.style.pointerEvents = "none"
        paper.style.pointerEvents = "none"
    });
}
function botPlayer() {

    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomNumber = random(1, 4)
    const item = randObj[randomNumber]
    if (randomNumber in randObj) {
        console.log("Key found")
    }
    else {
        // botPlayer()
        result.innerText = "Draw"
        console.log(randomNumber)
        // if player and bot have the same selection loop back
    }
    item.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  #00FF00";
    item.style.pointerEvents = "none";          // make bot selection item unclickable/unchangeable
    return randomNumber
}

function singlePlayerGame() {
    player()
    list.forEach((element, playerSelection) => {
        element.onclick = () => {
            if (element.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue") {
                played = true
                if (played == true) {
                    console.log("Bot played")
                    let botSelection = botPlayer()
                    console.log(botSelection)
                    console.log(playerSelection, " Human selection")
                    // game play section

                    if (playerSelection == 0 && botSelection == 2) {
                        result.innerText = "Paper Cover's rock => Bot Wins"
                    }
                    if (playerSelection == 0 && botSelection == 3) {
                        result.innerText = "Rock crushes scissors => You Win"
                        result.style.color = "lime"
                    }
                    if (playerSelection == 1 && botSelection == 1) {
                        result.innerText = "Paper Cover's rock => You Win"
                        result.style.color = "lime"
                    }
                    if (playerSelection == 1 && botSelection == 3) {
                        result.innerText = "Scissors cut paper=> Bot Wins"
                    }
                    if (playerSelection == 2 && botSelection == 1) {
                        result.innerText = "Rock crushes scissors => Bot Wins"
                    }
                    if (playerSelection == 2 && botSelection == 2) {
                        result.innerText = "Scissors cut paper=> You Win"
                        result.style.color = "lime"
                    }

                    // how to find selected items
                }
            }
        }
    });
}

let gamePlay = new DuoPlayerGame()

// singlePlayerGame()

restartBtn.addEventListener('click', () => {
    window.location.reload();

})