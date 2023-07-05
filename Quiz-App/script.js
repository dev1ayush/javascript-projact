const quizData = [
    {
        qustion: 'what is the age of ayush..?',
        a: '10',
        b: '100',
        c: '22',
        d: '17',
        correct: 'c'
    },
    
    {
        qustion: 'who is the prime minister of india..?',
        a: 'rahul gandhi',
        b: 'narendra modi',
        c: 'ayush singh',
        d: 'salman khan',
        correct: 'b'
    },

    {
        qustion: '2+2 = ?',
        a: '10',
        b: '100',
        c: '4',
        d: '17',
        correct: 'c'
    },

    {
        qustion: 'mia khalifa is a...?',
        a: 'film-star',
        b: 'doctor',
        c: 'singer',
        d: 'pornstar',
        correct: 'd'
    },

    {
        qustion: 'who is the chief minister of bihar...?',
        a: 'roshan singh chauhan',
        b: 'ballu bakra',
        c: 'nitish kumar',
        d: 'none of these',
        correct: 'c'
    }
];
const quiz = document.getElementById('quiz');
const answer_el = document.querySelectorAll('.answer_element');
// storing quastion element
const qustion = document.getElementById('qustion');
// storing answer element
const ans_a =  document.getElementById('ans_a');
const ans_b =  document.getElementById('ans_b');
const ans_c =  document.getElementById('ans_c');
const ans_d =  document.getElementById('ans_d');


let qustionNo = 0;
let score = 0;

function loadQuiz(){
    deSelectedCheck()
    // loading quastion
    qustion.innerHTML = quizData[qustionNo].qustion;

    // loading answer
    ans_a.innerHTML = quizData[qustionNo].a
    ans_b.innerHTML = quizData[qustionNo].b
    ans_c.innerHTML = quizData[qustionNo].c
    ans_d.innerHTML = quizData[qustionNo].d
}

// initial calling
loadQuiz();

function getSelected(){
    let answer = undefined;
    answer_el.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectedCheck(){
    answer_el.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

document.getElementById("btn").addEventListener('click', ()=>{
    const answer = getSelected();
    if(answer === quizData[qustionNo].correct){
        score++;
     
    };
    
    answer_el.forEach((answerEl) => {
        if (answerEl.checked) {
            qustionNo++;
        };
    });
    
    if(qustionNo < quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML = `
                <h2 style='padding:1rem'>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    };
});
