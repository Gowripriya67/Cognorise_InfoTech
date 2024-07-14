const quizData = [
    {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Home Tool Markup Language",
        d: "Hyper Tool Markup Language",
        correct: "a"
    },
    {
        question: "Which of the following is a CSS framework?",
        a: "Angular",
        b: "React",
        c: "Bootstrap",
        d: "Vue",
        correct: "c"
    },
    {
        question: "What does CSS stand for?",
        a: "Colorful Style Sheets",
        b: "Creative Style Sheets",
        c: "Cascading Style Sheets",
        d: "Computer Style Sheets",
        correct: "c"
    },
    {
        question: "Which HTML element is used to specify a header for a section or page?",
        a: "<header>",
        b: "<top>",
        c: "<head>",
        d: "<section>",
        correct: "a"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        a: "Laravel",
        b: "Django",
        c: "Spring",
        d: "Angular",
        correct: "d"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
