const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const startBtn = document.getElementsByClassName('btn-reload');
let played = true;
let list = [rock, paper, scissors]
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
        played = true
    });
    paper.addEventListener('click', () =>{
        // paper.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        paper.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        paper.style.pointerEvents = "none";
        delete randObj['2']
        scissors.style.pointerEvents = "none";
        rock.style.pointerEvents = "none"
        played = true
    });
    scissors.addEventListener('click', () =>{
        // scissors.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        scissors.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  blue";
        scissors.style.pointerEvents = "none";
        delete randObj['3']
        rock.style.pointerEvents = "none"
        paper.style.pointerEvents = "none"
        played = true
        dinner = true
    });
    return played
}
function botPlayer(){
    
    const random = (min, max) => Math.floor(Math.random() * (max-min) + min);
    const item = randObj[random(1,3)]
    item.style.pointerEvents = "none";          // make bot selection item unclickable/unchangeable
    item.getElementsByTagName('img')[0].style["boxShadow"] = " 0px 3px 8px  #00FF00";
}
// botPlayer()
// player()
