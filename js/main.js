import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

    
   myCues = [
        { seconds: 52, callback: func1 },
        { seconds: 20, callback: func2 },
        {seconds: 10, callback: func3}, 
        {seconds: 9, callback: func4},
    ];

    
    cueTimer.setup("vid", myCues);

   
    const vid = document.querySelector("#vid");
    const selectVid = document.querySelector("#video_select");
    const selectTxt = document.querySelector("#text-track");
    const display = document.getElementById("transcript");
    const transcript_en = document.getElementById("transcript-en");
    const transcript_es = document.getElementById("transcript-es");
    const transcript_fr = document.getElementById("transcript-fr");
    const showHide = document.getElementById("show-hide");


    
   
       
}


function func1() {
    let bubble = document.querySelector(".bubble");
    bubble.innerHTML = "<p>Sing with Me!</p>";
    document.querySelector(".bubble").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".bubble").classList.toggle("hide");
    }, 4000);
}

function func2(){
    const spinach = document.getElementById("spinach"); 
    spinach.classList.toggle("hide")
    setTimeout(() =>{
        document.getElementById("spinach").classList.toggle("hide");
    },3000);
}

function func3(){
    document.querySelector(".popeye").style.animation = "move 2s infinite";
}
function func4(){
    document.querySelector(".popeye").classList.toggle("hide");
}