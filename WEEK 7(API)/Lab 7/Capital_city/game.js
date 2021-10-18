let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')

let playAgainButton=document.querySelector('#play_Again')
resultTextElement.innerHTML=''
// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

  // You don't need to log countriesAndCodes - just proving it is available


// TODO when the page loads, select an element at random from the countriesAndCodes array
let randomCountryNumber = Math.floor(Math.random() * countriesAndCodes.length);// select random element



// TODO display the country's name in the randomCountryElement 
let randomCountry=countriesAndCodes[randomCountryNumber]
randomCountryElement.innerHTML=randomCountry.name
//document.getElementById('#ra')

// TODO add a click event handler to the submitButton.  When the user clicks the button,
submitButton.addEventListener('click',function (){
    //  * read the text from the userAnswerElement

    let answer=userAnswerElement.value
let countryCode=randomCountry['alpha-2']

let countriesUrl=`https://api.worldbank.org/v2/country/${countryCode}?format=json`

fetch(countriesUrl)
    .then(response =>response.json())
    .then((countriesJson)=>{
           // let c =countriesJson.name
        console.log(countriesJson)
       // console.log(c)
        let randomCapitalCity=countriesJson[1][0].capitalCity

        console.log(randomCapitalCity)

        if(answer.toUpperCase()===randomCapitalCity.toUpperCase()){
            resultTextElement.innerHTML='Correct!'
        }else {
            resultTextElement.innerHTML=''
            resultTextElement.innerHTML=`Your answer is wrong.The capital of ${randomCountry.name} is not ${answer}, it is ${randomCapitalCity}`
        }
    })
})

//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"


// TODO finally, connect the play again button. Clear the user's answer, select a new random country,

playAgainButton.addEventListener('click',function (){
   randomCountryNumber = Math.floor(Math.random() * countriesAndCodes.length);
 randomCountry=countriesAndCodes[randomCountryNumber]
    randomCountryElement.innerHTML=randomCountry.name

    userAnswerElement.value=''
    resultTextElement.innerHTML=''
})
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 
