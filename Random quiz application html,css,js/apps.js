const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorConatainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswer = 0;
let attempts = 0;


// push the question into availableQuestions Array
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }

}
// set question number and question and option
function getNewQuestion(){

    // set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    // set question text
    // get random question

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    console.log(questionIndex);
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // get the position of questionIndex from the availableQuestions array
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the questionIndex from the availableQuestion array , so that the question does not repeat
    availableQuestions.splice(index1,1);

    // set 
    // get the length of options
    const optionLength = currentQuestion.options.length;
    // push options into availableQuestions array

    for(i=0; i<optionLength; i++){

        availableOptions.push(i);
    }
    optionContainer.
    innerHTML = "";

    let animationDelay = 0.15;

    // create options in HTML
    for(let i=0; i<optionLength; i++){
        // random option
        const optionIndex = availableOptions[Math.floor(Math.random()* availableOptions.length)];
        // get the position of optionIndex forom the avialableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the optionIndex from the availableQuestion array , so that the option does not repeat
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }

    questionCounter ++;


}

// get the result of current attempt question
function getResult(element){
    const id = parseInt(element.id);
    // get the answer by comparing the correct option
    if(id === currentQuestion.answer){
        // set the green color to correct option
        element.classList.add("correct");
        // add the indicator to mark
        upadteAnswerIndicator("correct");
        correctAnswer++;
        console.log("correct:" +correctAnswer);
    }else{
        // set red color to incorrect option
        element.classList.add("wrong");
        upadteAnswerIndicator("wrong");
        // if the answer is incorrect show the correct option adding green color
        const optionLength = optionContainer.children.length;
        for(let i=0; i<optionLength; i++){
        if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
            optionContainer.children[i].classList.add("correct");
        }
    }

    }
    attempts++;
    unclickableOptions();
}
// make all the options unclickedable once the user select a option (RESTRICT THE USER TO CHANGE THE OPTION ONCE ITS SELECTED)
function unclickableOptions(){
    const optionLength = optionContainer.children.length;
    for(let i=0; i<optionLength; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answerIndicator(){
    answerIndicatorConatainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(i=0; i<totalQuestion; i++){
        const indicator =document.createElement("div");
        answerIndicatorConatainer.appendChild(indicator);
    }
}

    function upadteAnswerIndicator(markType){
        answerIndicatorConatainer.children[questionCounter-1].classList.add(markType)
    }

function next(){

    if(questionCounter === quiz.length){
        console.log("quiz over");
        quizOver();
    }else{
        getNewQuestion();
    }
}

function quizOver(){
// hide quizBox
quizBox.classList.add("hide");
// show resultBox
resultBox.classList.remove("hide");
quizResult();
}
// get the quizResult
function quizResult(){
    quizResult
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempts;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswer;
    resultBox.querySelector(".total-wrong").innerHTML = attempts - correctAnswer;
    const percentage = (correctAnswer/quiz.length)*100;
    resultBox.querySelector(".total-percentage").innerHTML = percentage.toFixed() + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswer +" / " + quiz.length;
}

function resetQuiz(){
    questionCounter = 0;
    correctAnswer = 0;
    attempts = 0;
}

function tryAgain(){ 
    // hide the resultBox
    resultBox.classList.remove("hide"); 
    // show the quizBox
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();

}

function goToHome(){
    // hide the resultbox
    resultBox.classList.add("hide");
    // show the home box
    homeBox.classList.remove("hide");
    resetQuiz();
}

// #### Starting Point ####

function startQuiz(){
    // hide home Box
    homeBox.classList.add("hide");
    // show quiz box
    quizBox.classList.remove("hide");


    // first we will set all question in availableQuestions array
    setAvailableQuestions();
    // second we will call getNewQuestion function
    getNewQuestion();
    answerIndicator();
}