const player1_score = document.querySelector("#scoreP1")
const player2_score = document.querySelector("#scoreP2")
const player1_tmpscore = document.querySelector("#tmp_scoreP1")
const player2_tmpscore = document.querySelector("#tmp_scoreP2")
const player1_div = document.querySelector("#player1Div")
const player2_div = document.querySelector("#player2Div")
const shuffle_button = document.querySelector(".shuffle")
const newgame_button = document.querySelector(".new")

var scoreP1=0, scoreP2=0, isThrown=false, last_dice = 1, playerTurn = 1

const update = setInterval(()=>{
    if(isThrown){
        document.getElementById(`dice#${last_dice}`).style.display = 'none'
        rand = 1+Math.floor(Math.random()*6)
        document.getElementById(`dice#${rand}`).style.display = 'block'
        last_dice = rand
    }
    if(playerTurn==1){
        player2_div.style.zIndex = '0'
        player2_div.style.background = 'white'
        player1_div.style.background = 'rgb(248, 248, 248)'
        player2_div.style.transform = 'scale(1)'
        player1_div.style.transform = 'scale(1.05)'
        player1_div.style.zIndex = '1'
    } else {
        player1_div.style.zIndex = '0'
        player1_div.style.background = 'white'
        player2_div.style.background = 'rgb(248, 248, 248)'
        player1_div.style.transform = 'scale(1)'
        player2_div.style.transform = 'scale(1.05)'
        player2_div.style.zIndex = '1'
    }

}, 100)

async function wait(ms){
    await new Promise(r => setTimeout(()=>{
        isThrown = false
        addingScore()
        switchingTurns()
    }, ms))
}

let shuffle = ()=>{
    isThrown = true
    wait(2000)
}
let addingScore = ()=>{
    if(playerTurn==1){
        player1_score.innerHTML = last_dice
        scoreP1 += last_dice
        player1_tmpscore.innerHTML = scoreP1
    } else {
        player2_score.innerHTML = last_dice
        scoreP2 += last_dice
        player2_tmpscore.innerHTML = scoreP2
    }
}
let switchingTurns = ()=>{
    if(playerTurn==1){
        playerTurn = 2
    } else {
        playerTurn = 1
    }
}
let newGame = ()=>{
    scoreP1=0, scoreP2=0, isThrown=false, last_dice = 1, playerTurn = 1
    player1_score.innerHTML = 0
    player1_tmpscore.innerHTML = 0
    player2_score.innerHTML = 0
    player2_tmpscore.innerHTML = 0
}

shuffle_button.addEventListener('click', ()=>shuffle())
newgame_button.addEventListener('click', ()=>newGame())