const startButton = document.getElementById('start-btn')
const firstQuestionElement = document.getElementById('1')
const submitElement = document.getElementById('submit-btn')
const nextElement = document.getElementById('next-btn')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    firstQuestionElement.classList.remove('hide')
    submitElement.classList.remove('hide')
    nextElement.classList.remove('hide')
}

let numberClick = 1
const nextButton = document.getElementById('next-btn')
nextButton.addEventListener('click', nextQuiz)

function nextQuiz() {
    let id_string = numberClick.toString()
    console.log(id_string)
    const currentEl = document.getElementById(id_string)
    numberClick++
    id_string = numberClick.toString()
    console.log(id_string, 'next')
    nextButton.classList.remove('hide')
    const nextEl = document.getElementById(id_string)
    console.log(nextEl)
    currentEl.classList.add('hide')
    nextEl.classList.remove('hide')

}

const answerButton = document.getElementById('answer-buttons')
answerButton.addEventListener('click', answerQuiz)
const correctAns = document.getElementById('correct')
const wrongEl = document.getElementById('wrong')


function answerQuiz() {
    if (correctAns == true) {
		console.log('correct');
		} else {
		console.log('wrong');
        wrongEl.classList.remove('hide')
        submitElement.classList.add('hide')
	}
    }
    
