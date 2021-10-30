let randomFlagElement=document.querySelector('#random-flag')
let userAnswerElement=document.querySelector('#user-answer')
let submitAnswerElement=document.querySelector('#submit-answer')
let userResult=document.querySelector('#result')
let playAgainButton=document.querySelector('#play-again')
let image=document.querySelector('img')
//let flagPicture=document.createElement('img')
let userScore=document.querySelector('#score')
let userQuestion=document.querySelector('#question')




//let url1 ='https://github.com/CivilServiceUSA/us-states/blob/master/data/states.json'
 let stateListUrl ='https://state-info.herokuapp.com/api/state-list'
function getState(){

    fetch(stateListUrl).then(response=>response.json()).then(statesinfo=>{
        let randomStatesList=[]

        for ( let x=0; x<5; x++) {
            let randomStateNumber = Math.floor(Math.random() * statesinfo.length);// select random state
            let randomState = statesinfo[randomStateNumber]

            console.log(randomState)
            randomStatesList.push(randomState)
        }console.log(randomStatesList)
        let  questionCounter=0
    randomStatesList.forEach(function (selectedState){
                let stateInfoUrl = `https://state-info.herokuapp.com/api/info/${selectedState}`

        fetch(stateInfoUrl).then(response2=>response2.json()).then(statesDetail=>{
            let ask ='For which state is the following flag? '
            let question=document.createElement('P')
            let flagImage=document.createElement('img')
            let answerInput=document.createElement('input')

            question.innerHTML=ask

            flagImage.src=statesDetail.state_flag_url

            randomFlagElement.append(flagImage)
            //randomFlagElement2.appendChild(flagImage)

            userQuestion.append(question)
            userAnswerElement.append(answerInput)
            //userQuestion2.appendChild(question)
            //return randomState
            }
        ) })

        submitAnswerElement.addEventListener('click',function() {
            //console.log(answer)
            console.log(randomState)
            let  correctAnswer=0
            let answer=userAnswerElement.value
            if (answer.toLowerCase()===randomState.toLowerCase()){
                userResult.innerHTML=`Your answer is correct `.fontcolor('green')
                correctAnswer++
                userScore.innerHTML = (correctAnswer)+" / "+randomStatesList.length;
                userScore.innerHTML=`Score ${scoreCounter+1}`
            }else  {
                userResult.innerHTML=`Your answer is wrong the correct answer is ${randomState} `.fontcolor('red')

            }
        })


// nextButton.addEventListener('click',function () {
//
// })


    })
}





    getState()




     playAgainButton.addEventListener('click',function (){
         userResult.innerHTML=''
         answer=''
         userAnswerElement.value=''
         randomFlagElement.removeChild(flagPicture)


         getState()


     })


//https://state-info.herokuapp.com/api/info/Alaska
