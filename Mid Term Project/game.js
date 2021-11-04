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

let flagImage = document.querySelector('#random-flag-image') // image element for current flag. Make one element and swap out the src instead of deleting and re-creating new images for each flag

let correctAnswer = 0 // assign variable for number of correct answers

let stateListUrl ='https://state-info.herokuapp.com/api/state-list'// state list Url

let stateList  // populated by API call to get list of states 

let randomStatesList   // will be set in startGame 
let stateListIndex  // keep track of which flag 0-4 is being asked
let statesInfo  


fetch(stateListUrl).then(response => response.json()).then(states => { // fetch  state list url
    statesInfo = states  // set global statesInfo to the array from the API states
    startGame()  
}).catch(err=> {
    console.log('Error fetching state list', err)
    alert('Sorry, error load the game')
})


submitAnswerElement.addEventListener('click', function () { // add listener for submit button image

    answer=userAnswerElement.value// get the value of the user answer
    if (answer.length === 0) {// if the user is not answer a question alert pop up
        alert('Please answer the question')
    } else {// otherwise check the answer is correct or not
        let selectedState = randomStatesList[stateListIndex]

        if (answer.toLowerCase() === selectedState.toLowerCase()) {// if the answer is correct
            userResult.innerHTML = `Your answer is correct `.fontcolor('green')
            correctAnswer++
           
        } else {// other wise print the following
            userResult.innerHTML = `Your answer is wrong the correct answer is ${selectedState} `.fontcolor('red')
        }
    }
})


tryAgainButton.addEventListener('click',function (){// reset the game play again

    //clear all and start a gain
    userResult.innerHTML=''
    answer=''
    userAnswerElement.value=''
    randomFlagElement.removeChild(flagImage)  // clear all 
    userPassFail.innerHTML=''
    correctAnswer = 0  // reset score 

    startGame()

})


nextButton.addEventListener('click',function () { // add next button event listener
    
    answer = userAnswerElement.value// get the user answer value

    if (!answer) {// uf the user didn't answer alert the following message
        alert('Please answer the current question before moving to the next')
        return
    }

    // increase question number 
    stateListIndex++// state list index increment by 1

    // show the number of question
    if (stateListIndex >= randomStatesList.length){// if the sate list index greater than the state list length
        // end of quiz, display results 
        userResult.innerHTML=` Your result is ${correctAnswer} / ${randomStatesList.length}`
        if (correctAnswer>randomStatesList.length/2){
            userPassFail.innerHTML='Pass, Congratulation'.fontcolor('green')
        }else {
            userPassFail.innerHTML='Fail, Try a gain'.fontcolor('red')
        }
 
    } else {
        questionCounterElement.innerHTML = `Question ${stateListIndex + 1} of ${randomStatesList.length}`
    
        let randomState = randomStatesList[stateListIndex]// assign random state
        console.log(randomState)
        console.log(stateListIndex)
        console.log(correctAnswer)

        let stateInfoUrl = `https://state-info.herokuapp.com/api/info/${randomState}`

        fetch(stateInfoUrl).then(response2 => response2.json()).then(statesDetail => {
            flagImage.src = statesDetail.state_flag_url// get the flag image
            randomFlagElement.src = flagImage// assign random flag image with the next flag
            userResult.innerHTML = ''// clear the user result string
            userAnswerElement.value = ''// clear the user answer
        }).catch(err => {
            console.log(err)
            alert('Error fetching state flags')
        })  
    }
    
})

function startGame() {

    randomStatesList = []   // reset array

    for (let x = 0; x < 5; x++) {// for loop to select five states
        let randomStateNumber = Math.floor(Math.random() * statesInfo.length);// select random state
        let randomState = statesInfo[randomStateNumber]
        console.log(randomState)
        randomStatesList.push(randomState)// push the selected state to random state list
    }

    stateListIndex = 0// assign state list index to 0 to use the first random state name 

    let stateInfoUrl = `https://state-info.herokuapp.com/api/info/${randomStatesList[stateListIndex]}`

    fetch(stateInfoUrl).then(response => response.json()).then(statesDetail => {// fetch each state to get the state flag
        let ask = 'For which state is the following flag? '// assign question
        //let question = document.createElement('P')// create a paragraph element for question
        //  flagImage = document.createElement('img')// create image element
        userQuestion.innerHTML = ask// assign question for userQuestion element
        flagImage.src = statesDetail.state_flag_url// get the flag image from state detail
        randomFlagElement.append(flagImage)// add state flag image to flag element

        console.log(randomStatesList[stateListIndex])
        questionCounterElement.innerHTML = `Question ${stateListIndex + 1} of ${randomStatesList.length}`
         
    })
}





