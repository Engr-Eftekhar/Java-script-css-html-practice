// selecting elements

let totalAttempts =5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;


const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const gussingNumber = form.querySelector("#GussingNumber");
const checkButton = form.querySelector("#check");
const resultText = document.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = document.querySelector(".remainingAttempts");


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    attempts++;
    if(attempts> 5){
        gussingNumber.disabled = true;
        checkButton.disabled = true;

    }else{
        checkResult(gussingNumber.value);
        remainingAttempts.innerHTML = `Remaining attempts : ${totalAttempts-attempts}`;

    }
    gussingNumber.value = "";
});

function checkResult(gussingNumber){
    const randomNumber = getRandomNumber(5);
    if(gussingNumber ==  randomNumber){

        resultText.innerHTML = ` You have won`;
        totalWons++;

    }else{
        resultText.innerHTML = `You have lost; random number was : ${randomNumber}`;
        totallosts++;

    }
    lostWonMessage.innerHTML = `won: ${totalWons}, lost: ${totallosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
    

}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit + 1);
}

