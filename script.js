let btn1 = document.getElementById("true-btn");
let btn2 = document.getElementById("false-btn");
let question = document.getElementById("question");
let score = document.getElementById("score");

let scorequistion = 0;
let crquistion = 0;

const questions = [
    { question: "youcode une ecole de programation ?", reponse: true },
    { question: "rabat une capital de maroc", reponse: true },
    { question: "css utilise pour la stricture", reponse: false }
];


function afficherquistion() {  
    if (crquistion < questions.length) {
        question.innerHTML = questions[crquistion].question;
    } else {
        question.innerHTML = "C'est fini!";
        score.innerHTML = `Score: ${scorequistion}`;
    }
}


function checkrepensse(checkr) {
    if (checkr === questions[crquistion].reponse) {
        scorequistion++;
    }
    crquistion++; 
    afficherquistion(); 
}


btn1.addEventListener("click", () => {
    checkrepensse(true);  
});


btn2.addEventListener("click", () => {
    checkrepensse(false); 
});


afficherquistion();
