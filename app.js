let gameseq = [];
let userseq = [];

let level = 0;
let start  = false;

let hsscore = 0;

let high = document.querySelector(".highscore")
let h2 = document.querySelector("h2");
let color = ['yellow', 'red', 'purple','green']

document.addEventListener("keypress" , function(){
    if(start == false){
        console.log("game is start");
        start = true;
        lvlup();    
    }
});
function flashbtn(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },350);
};
function userflashbtn(btn2){
   btn2.classList.add("userflash");
   setTimeout(function(){
    btn2.classList.remove("userflash");
   },200);
};
 
function lvlup(){
    userseq =[];
    level++;
    h2.innerText = ` Level ${level}`;

    let Random = Math.floor(Math.random()*3);
    let rndcidx = color[Random];
    let Rcolor = document.querySelector(`.${rndcidx}`);
    gameseq.push(rndcidx);
    console.log(gameseq);

    flashbtn(Rcolor);
     hsscore = Math.max(hsscore , level)
};

function checkans(idx){
    if(gameseq[idx] === userseq[idx]){
       if(gameseq.length == userseq.length){
        lvlup();
       }
    }
    else{
        h2.innerHTML = ` Game Over! <b> Your Score Was : ${level}</b><br> Press any key to start.`;
        // let high = document.querySelector(".highscore")
        high.innerHTML = `High Score : ${hsscore}`;
        resetGame();
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "rgb(20, 26, 69)";
        },150)
    }
}
function btnpress(){
    let btn = this;
    userflashbtn(btn);

    let presscolor = btn.getAttribute("id");
    userseq.push(presscolor);
    // console.log(userseq);

    checkans(userseq.length-1)

}
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click" , btnpress);
}
function resetGame(){
    start = false;
    level = 0;
    gameseq =[];
    userseq = [];
}

