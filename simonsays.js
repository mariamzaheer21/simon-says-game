let gameSeq=[];
let userSeq=[];
let btns=["yellow", "purple","green","red"];

let strated=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(strated==false){
    console.log(" game started ");
    strated=true;
    levelUP();
    }

});

function gameFlash(btn){
 btn.classList.add("flash");
 setTimeout( function(){
    btn.classList.remove("flash");} , 250);  
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
       btn.classList.remove("userflash");} , 250);  
   }

function levelUP(){
    userSeq=[];
    level++;
    h3.innerText=`level No ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor =btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}
function checkAns(idx){
    console.log(`current level, ${level}`);
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout( levelUP,1000) 
        }
    } else{
        // console.log(`not same value`);
        h3.innerHTML=`Game Over! your score is <b> ${level} </b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id")
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}
 function reset (){
    strated=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }