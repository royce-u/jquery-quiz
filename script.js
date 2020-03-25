
let ans0 = $('#answer0')
let ans1 = $('#answer1')
let ans2 = $('#answer2')
let ans3 = $('#answer3')

let display = $('#display-box')
let questionBox = $('.prompt')
let startBtn = $('#start')
let nextBtn = $('#next')
let score = 0
let questionNumber = 0
let selAns = ''

let questions = [
    {   question: 'Who is the Queen of England?',
        posAnswer: ['Queen Elizabeth II', 'Catherine, Duchess of Cambridge', 'Meghan, Duchess of Sussex', 'Beyonce Knowles'],
        answer: 0
    },
    {   question: 'Who is the ruler of Zamunda?',
        posAnswer: ['Price Akeem', 'Queen Aoleon', 'King Jaffe Joffer', 'Semmi'],
        answer: 2
    },
    {   question: 'Who was the first human being in outer space?',
        posAnswer: ['Neil Alden Armstrong', 'Yuri Alekseyevich Gagarin', 'John Herschel Glenn', 'Alan Shepard'],
        answer: 1
    },
    {
        question: 'Who is the Prime Minister of Japan?',
        posAnswer: ['Yoshihiko Noda', 'Naoto Kan', 'Shinzō Abe', 'Yukio Hatoyama'],
        answer: 2
    }, 
    {
        question: 'What is Sarutobi?',
        posAnswer: ['A tea ceremony', 'Ritual Suicide', 'A ninja', 'A monkey'],
        answer: 2
    }
    ]

//answer button click events
$(ans0).click(function(e){
    selAns = $(this).attr('id')
})
$(ans1).click(function(e){
    selAns = $(this).attr('id')
})
$(ans2).click(function(e){
    selAns = $(this).attr('id')
})
$(ans3).click(function(e){
    selAns = $(this).attr('id')
})

//add start button event listener
$(startBtn).click(function(){
    display.text('Question 1 of 5')
    questionBox.text(questions[0].question)
    ans0.val(questions[0].posAnswer[0])
    ans1.val(questions[0].posAnswer[1])
    ans2.val(questions[0].posAnswer[2])
    ans3.val(questions[0].posAnswer[3])
})
//add next button event listener
$(nextBtn).click(function(){
    if (selAns[selAns.length - 1] == questions[questionNumber].answer) {
        score++
    }
    console.log('question number: ' + questionNumber)
    console.log('score: ' + score)
    if (questionNumber == 4) {
        display.text('Total Score: ' + score)
        return
    } 
    else {
    questionNumber++
    displayQues(questionNumber)
    }
})

function displayQues(x) {
    display.text('Question: ' + (x+1) + ' of 5')
    questionBox.text(questions[x].question) 
    ans0.val(questions[x].posAnswer[0])
    ans1.val(questions[x].posAnswer[1])
    ans2.val(questions[x].posAnswer[2])
    ans3.val(questions[x].posAnswer[3])
}

        


