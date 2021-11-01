let randomFlagElement=document.querySelector('#random-flag')// get random flag by id
let userAnswerElement=document.querySelector('#user-answer') // get user answer element by id
let submitAnswerElement=document.querySelector('#submit-answer')// get submit  user answer
let userResult=document.querySelector('#result')// get user result by ID
let userPassFail=document.querySelector('#passFail')
let tryAgainButton=document.querySelector('#play-again')// get play again button by id

let questionCounterElement=document.querySelector('#number-of-question')//
let userQuestion=document.querySelector('#question')
let nextButton=document.querySelector('#next')
let answer=userAnswerElement.value// get the value of the user answer

let correctAnswer = 0// assign variable for correct answer


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
                    answer=userAnswerElement.value// get the value of the user answer
                    if (answer.length === 0) {// if the user is not answer a question alert pop up
                        alert('Pleas answer the question')
                    } else {// otherwise check the answer is correct or not
                        let selectedState = randomStatesList[stateListIndex]

                        if (answer.toLowerCase() === selectedState.toLowerCase()) {// if the answer is correct
                            userResult.innerHTML = `Your answer is correct `.fontcolor('green')
                            correctAnswer++
                           // userScore.innerHTML = (correctAnswer) + " / " + randomStatesList.length;

                        } else {// other wise print the following
                            userResult.innerHTML = `Your answer is wrong the correct answer is ${selectedState} `.fontcolor('red')

                        }
                    }
                })

                nextButton.addEventListener('click',function () {// add next button event listener
                    answer = userAnswerElement.value// get the user answer value


                // show the number of question
                    if(stateListIndex>randomStatesList.length){// if the sate list index greater than the state list length
                        stateListIndex=randomStatesList.length
                        questionCounterElement.innerHTML = `Question ${stateListIndex } of ${randomStatesList.length}`
                    }else {
                        questionCounterElement.innerHTML = `Question ${stateListIndex + 1} of ${randomStatesList.length}`
                    }
                    stateListIndex++// state list index increment by 1
                    let randomState = randomStatesList[stateListIndex]// assign random state
                    console.log(randomState)
                    console.log(stateListIndex)
                    console.log(correctAnswer)

                    let stateInfoUrl = `https://state-info.herokuapp.com/api/info/${randomState}`

                    if (randomStatesList.length > stateListIndex) {// if the state list length greater than the list index

                        if (!answer) {// uf the user didn't answer alert the following message
                            alert('Pleas answer the question ')
                        } else { //otherwise fetch the next flag image



                            fetch(stateInfoUrl).then(response2 => response2.json()).then(statesDetail => {


                                flagImage.src = statesDetail.state_flag_url// get the flag image

                                randomFlagElement.src = flagImage// assign random flag image with the next flag
                                userResult.innerHTML = ''// clear the user result string
                                userAnswerElement.value = ''// clear the user answer


                            })
                        }
                    }else {// if the question ends print the total result
                        userResult.innerHTML=` Your result is ${correctAnswer} /${randomStatesList.length}`
                        if (correctAnswer>randomStatesList.length/2){
                            let passFail=document.createElement('p');
                           userPassFail.innerHTML='Pass, Congratulation'.fontcolor('green')
                        }else {
                            userPassFail.innerHTML='Fail, Try a gain'.fontcolor('red')
                        }
                    }

                })

                tryAgainButton.addEventListener('click',function (){// play again

                   //clear all and start a gain
                    userResult.innerHTML=''
                    answer=''
                    userAnswerElement.value=''
                    randomFlagElement.removeChild(flagImage)
                    userPassFail.innerHTML=''



                    getState()// call get state function


                })
                })

    })

}





getState()// call get state function


