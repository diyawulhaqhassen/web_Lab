let randomFlagElement=document.querySelector('#random-flag')
let userAnswerElement=document.querySelector('#user-answer')
let submitAnswerElement=document.querySelector('#submit-answer')
let userResult=document.querySelector('#result')
let playAgainButton=document.querySelector('#play-again')
let image=document.querySelector('img')
//userResult.innerHTML=''
let answer=userAnswerElement.value
console.log(answer)
//window.onload=()=>generateRandomFlag(statesData.state_flag_url)
let randomStateNumber = Math.floor(Math.random() * statesData.length);// select random state
   let randomState=statesData[randomStateNumber]
    // randomFlagElement.innerHTML=randomState.state_flag_url
    let flagImage=document.createElement('img' )
   // flagImage.style.length=100;

    flagImage.src=randomState.state_flag_url
console.log(flagImage)
randomFlagElement.appendChild(flagImage)

 let stateName=randomState.state
console.log(stateName)

submitAnswerElement.addEventListener('click',function() {
    if (answer===stateName){
        userResult.innerHTML=`Your answer is Correct`

    }else  {
        userResult.innerHTML=`Your answer is wrong the correct answer is ${stateName} `
    }
                                                       })



//console.log(randomStateFlag)

// randomFlagElement.setAttribute('src',statesData[randomState])
// //randomFlagElement.innerHTML='<img src=${randomState.state_flag_url}>'
// let url ='https://github.com/CivilServiceUSA/us-states/blob/master/data/states.json'
// fetch(url).then(response=>response.json()).then(statesinfo=>{
//     let randomStateNumber = Math.floor(Math.random() * statesinfo.length);// select random state
//     let randomState=statesinfo[randomStateNumber]
//     randomFlagElement.innerHTML=randomState.state_flag_url
// })

//
// function generateRandomFlag(array){
//     let randomNum=Math.floor(Math.random()*array.length)
//    image.setAttribute('src',array[randomNum])

    // let randomStateFlag=statesData[randomState.state_flag_url]

  // randomFlagElement.setAttribute('src',statesData[randomStateFlag])
