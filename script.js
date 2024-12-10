let gameSeq = [];
let userSeq = [];

let btns = ["red", "purple", "yellow" , "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("gamestart");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    },200);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function() {
        btn.classList.remove("userflash");
    },200);
}


function levelup(){
    userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
 
   let randidx = Math.floor(Math.random() * 3);
   let randColor = btns[randidx];
   let randBtn = document.querySelector(`.${randColor}`);
//    console.log(randidx);
//    console.log(randColor);
//    console.log(randBtn);
gameSeq.push(randColor);
console.log(gameSeq);
  gameFlash(randBtn);
  
}



function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
        setTimeout(levelup, 1000);
      }
    }else{
      h2.innerHTML = `Game Over! Your Score is <b>${level}</b> Press any key to start.`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";},150);
      reset();
    }
}



function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
     started = false;
     gameSeq = [];
     userSeq = [];
     level = 0;

}


