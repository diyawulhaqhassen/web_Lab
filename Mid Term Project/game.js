let randomFlagElement=document.querySelector('#random-flag')
let userAnswerElement=document.querySelector('#user-answer')
let submitAnswerElement=document.querySelector('#submit-answer')
let userResult=document.querySelector('#result')
let playAgainButton=document.querySelector('#play-again')
let image=document.querySelector('img')
let flagPicture=document.createElement('img')
let userScore=document.querySelector('#score')

let  scoreCounter=0


//userResult.innerHTML=''

//console.log(answer)

// let randomStateNumber = Math.floor(Math.random() * statesData.length);// select random state
//    let randomState=statesData[randomStateNumber]
//
//     let flagImage=document.createElement('img' )
//
//
//     flagImage.src=randomState.state_flag_url
// console.log(flagImage)
// randomFlagElement.appendChild(flagImage)
//
//  let stateName=randomState.state
// console.log(stateName)
// console.log(randomState.state)




//console.log(randomStateFlag)

// randomFlagElement.setAttribute('src',statesData[randomState])
// //randomFlagElement.innerHTML='<img src=${randomState.state_flag_url}>'
let url1 ='https://github.com/CivilServiceUSA/us-states/blob/master/data/states.json'
 let url2 ='https://state-info.herokuapp.com/api/state-list'
function getState(){
    fetch(url2).then(response=>response.json()).then(statesinfo=>{
        let randomStateNumber = Math.floor(Math.random() * statesinfo.length);// select random state
        let randomState=statesinfo[randomStateNumber]
        let url =`https://state-info.herokuapp.com/api/info/${randomState}`
        console.log(randomState)

        fetch(url).then(response2=>response2.json()).then(statesDetail=>{

                flagPicture.src=statesDetail.state_flag_url
                randomFlagElement.appendChild(flagPicture)
                return randomState
            }
        )
        submitAnswerElement.addEventListener('click',function() {
            //console.log(answer)
            console.log(randomState)
            let answer=userAnswerElement.value
            if (answer.toLowerCase()===randomState.toLowerCase()){
                userResult.innerHTML=`Your answer is Correct `.fontcolor('green')

            }else  {
                userResult.innerHTML=`Your answer is wrong the correct answer is ${randomState} `.fontcolor('red')

            }
        })





    })
}

//getState()

for ( let x=0; x<5; x++){

    getState()

}


     playAgainButton.addEventListener('click',function (){
         userResult.innerHTML=''
         answer=''
         userAnswerElement.value=''
         randomFlagElement.removeChild(flagPicture)


         getState()


     })


//https://state-info.herokuapp.com/api/info/Alaska
