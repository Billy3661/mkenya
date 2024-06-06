
const questions = [
    {
        question: "What is the capital city of Kenya?",
        answers: [
            { text: "Mombasa", correct: false },
            { text: "Kisumu", correct: false },
            { text: "Nairobi", correct: true },
            { text: "Nakuru", correct: false },
        ]
    },
    {
        question:"Which is the official language of Kenya?",
         answers: [ { text:"English", correct:false}, 
         { text:"Swahili", correct:true}, 
         { text:"Kalenjin", correct:false},
          { text:"Luo", correct:false}, 
        ]
     },
         {
             question:" Which Kenyan athlete is famous for breaking the two-hour marathon barrier?", 
             answers: [
                 { text:"David Rudisha", correct:false},
              { text:"Eliud Kipchoge", correct:true}, 
              { text:"Paul Tergat", correct:false},
               { text:"Hellen Obiri", correct:false},
             ]
             }, 
          { 
            question:" Which is the longest river in Kenya?", 
            answers: [ 
                { text:"Tana River", correct:true},
             { text:"Ewaso nyiro", correct:false},
              { text:"Mara River", correct:false},
               { text:"Athi River", correct:false},
             ]
             }, 
        { 
            question:" Which is the highest mountain in Kenya", 
        answers: [ { text:"Mount Everest", correct:false},
         { text:"Mount Kilimanjaro", correct:false},
          { text:"Mount Kenya", correct:true}, 
          { text:"Mount Elgon", correct:false},
         ] 
        }, 
        { 
            question:" When did Kenya gain independence?",
         answers: [
             { text:"1960", correct:false},
          { text:"1961", correct:false},
           { text:"1963", correct:true},
            { text:"1964", correct:false},
         ] 
        }, 
        { question:" Who was the first president of Kenya?", 
        answers: [ 
            { text:"Daniel Arap Moi", correct:false},
             { text:"Jommo Kenyatta", correct:true},
              { text:"Uhuru Kenyatta", correct:false}, 
              { text:"Raila Amollo", correct:false},
             ] 
            },
             { 
                question:" What is the currency of Kenya?", 
                answers: [
                     { text:"Dollar", correct:false}, 
                     { text:"shilling", correct:true},
                      { text:"Euro", correct:false}, 
                      { text:"Pound", correct:false},
                     ]
                     },
             { question:"Which Kenyan city is known as 'Gate way to East Africa'?", 
             answers: [
                 { text:"Mombasa", correct:true},
              { text:"Kisumu", correct:false}, 
              { text:"Nairobi", correct:false},
               { text:"Nakuru", correct:false}, 
            ] 
        },
         {
             question:" Which is the largest lake in Kenya?", 
             answers: [ { text:"L. Nakuru", correct:false},
              { text:"L. Naivasha", correct:false}, 
              { text:"L. Victoria", correct:false}, 
              { text:"L.Turkana", correct:true}, 
            ] 
        }, 
        { question:"Which is the largest tribe in Kenya ?",
         answers: [
             { text:"Kikuyu", correct:true},
              { text:"Luo", correct:false}, 
              { text:"Kalenjin", correct:false}, 
              { text:"Kisii", correct:false}, 
            ]
         },
          { question:" What is Kenya's largest export product?", 
          answers: [ { text:"Tea", correct:true},
           { text:"Coffee", correct:false}, 
           { text:"Flowers", correct:false},
            { text:"Maize", correct:false}, 
        ]
     },
         { question:"Which animal is not among the Big 5 in Kenya?", 
         answers: [ { text:"Elephant", correct:false},
          { text:"Lion", correct:false}, 
          { text:"Giraffe", correct:true}, 
          { text:"Rhino", correct:false}, 
        ] 
    },
     { question:"Which famous anthropologist conducted extensive research in Olduvai Gorge ?", 
     answers: [ { text:"Charles Darwin", correct:false},
      { text:"Louis Leakey", correct:true}, 
      { text:"Steven Jay Gould", correct:false}, 
      { text:"Richard Dawkins", correct:false}, 
    ] 
},
        { question:" Which is the largest city in Kenya by population?", 
         answers: [ { text:"Mombasa", correct:false}, 
                 { text:"Kisumu", correct:false},
                  { text:"Nairobi", correct:true},
                   { text:"Nakuru", correct:false}, 
                ]
             },
              { question:" What is the main legislative body of Kenya called?", 
              answers: [ { text:"Senate", correct:false}, 
              { text:"National Assembly", correct:false},
               { text:"Parliament", correct:true},
                { text:"Executive", correct:false},
             ]
             }, 
             { question:" Which island is a popular tourist destination known for its Swahili culture?",
              answers: [ { text:"Lamu ", correct:true}, 
              { text:"Zanzibar", correct:false},
               { text:"Malindi", correct:false}, 
               { text:"Mauritius", correct:false}, 
            ]
         }, 
         { question:" Which Kenyan town is famous for being a major tea production area?", 
         answers: [ { text:"Mombasa", correct:false},
          { text:"Kericho", correct:true},
           { text:"Nairobi", correct:false}, 
           { text:"Nandi", correct:false},
         ] 
        }, 
        { question:" Which is the largest national park in Kenya?", 
        answers: [ { text:"Masai Mara", correct:false}, 
        { text:"Amboseli", correct:true}, 
        { text:"Tsavo", correct:true},
         { text:"Nairobi National park", correct:false}, 
        ] 
    },
{
        question: "Which ocean borders Kenya to the east?",
        answers: [
            { text: "Atlantic ocean", correct: false },
            { text: "Indian Ocean", correct: true },
            { text: "Pacific ocean", correct: false },
            { text: "Arctic ocean", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();

