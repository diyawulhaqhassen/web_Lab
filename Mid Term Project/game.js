let randomFlagElement=document.querySelector('#random-flag')// get random flag by id
let userAnswerElement=document.querySelector('#user-answer') // get user answer element by id
let submitAnswerElement=document.querySelector('#submit-answer')// get submit  user answer
let userResult=document.querySelector('#result')// get user result by ID
let playAgainButton=document.querySelector('#play-again')// get play again button by id
//let image=document.querySelector('img')// get image
let questionCounterElement=document.querySelector('#number-of-question')//
let userScore=document.querySelector('#score')
let userQuestion=document.querySelector('#question')
let nextButton=document.querySelector('#next')
let answer=userAnswerElement.value// get the value of the user answer

let correctAnswer = 0// asign variable for correct answer


//let url1 ='https://github.com/CivilServiceUSA/us-states/blob/master/data/states.json'
 let stateListUrl ='https://state-info.herokuapp.com/api/state-list'// state list Url
function getState() {// create a function to get states

    fetch(stateListUrl).then(response => response.json()).then(statesinfo => { // fetch  state list url
        let randomStatesList = []// random state list

        for (let x = 0; x < 5; x++) {// for loop to select five states
            let randomStateNumber = Math.floor(Math.random() * statesinfo.length);// select random state
            let randomState = statesinfo[randomStateNumber]
            console.log(randomState)
            randomStatesList.push(randomState)// push the selected state to random state list
        }
        let stateListIndex=0// assign state list index
            let stateInfoUrl = `https://state-info.herokuapp.com/api/info/${randomStatesList[stateListIndex]}`

            fetch(stateInfoUrl).then(response2 => response2.json()).then(statesDetail => {// fetch each state to get the state flag
                    let ask = 'For which state is the following flag? '// assign question
                   //let question = document.createElement('P')// create a paragraph element for question
                    let flagImage = document.createElement('img')// create image element
                    userQuestion.innerHTML = ask// assign question for userQuestion element
                    flagImage.src = statesDetail.state_flag_url// get the flag image from state detail
                    randomFlagElement.append(flagImage)// add state flag image to flag element

                console.log(randomStatesList[stateListIndex])
                questionCounterElement.innerHTML = `Question ${stateListIndex + 1} of ${randomStatesList.length}`

                submitAnswerElement.addEventListener('click', function () {// add listener for flag image
                    console.log(randomStatesList[stateListIndex])
                    console.log(answer.length)
                    if(answer.length===0){// if the user is not answer a question
                        alert('Pleas answer the question')
                    }else {
                        let randomState = randomStatesList[stateListIndex]

                        if (answer.toLowerCase() === randomState.toLowerCase()) {
                            userResult.innerHTML = `Your answer is correct `.fontcolor('green')
                            correctAnswer++
                            userScore.innerHTML = (correctAnswer) + " / " + randomStatesList.length;

                        } else {
                            userResult.innerHTML = `Your answer is wrong the correct answer is ${randomState} `.fontcolor('red')

                        }
                    }
                })

                nextButton.addEventListener('click',function () {
                    let answer = userAnswerElement.value



                    if(stateListIndex>randomStatesList.length){
                        stateListIndex=randomStatesList.length
                        questionCounterElement.innerHTML = `Question ${stateListIndex } of ${randomStatesList.length}`
                    }else {
                        questionCounterElement.innerHTML = `Question ${stateListIndex + 1} of ${randomStatesList.length}`
                    }
                    stateListIndex++
                    let randomState = randomStatesList[stateListIndex]
                    console.log(randomState)
                    console.log(stateListIndex)
                    console.log(correctAnswer)

                    let stateInfoUrl = `https://state-info.herokuapp.com/api/info/${randomState}`

                    if (randomStatesList.length > stateListIndex) {

                        if (!answer) {
                            alert('Pleas answer the question ')
                        } else {



                            fetch(stateInfoUrl).then(response2 => response2.json()).then(statesDetail => {


                                flagImage.src = statesDetail.state_flag_url

                                randomFlagElement.src = flagImage
                                userResult.innerHTML = ''
                                userAnswerElement.value = ''


                            })
                        }
                    }else {
                        userResult.innerHTML=` Your result is ${correctAnswer} /${randomStatesList.length}`
                    }

                })

                playAgainButton.addEventListener('click',function (){
                    userResult.innerHTML=''
                    answer=''
                    userAnswerElement.value=''
                    randomFlagElement.removeChild(flagImage)



                    getState()


                })
                })






//
//
//
//     })
//
//
// })


    })

}





getState()

//getState()






//https://state-info.herokuapp.com/api/info/Alaska
