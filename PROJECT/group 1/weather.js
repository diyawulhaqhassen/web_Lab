let weatherApiUrl='https://api.weather.gov/gridpoints/MPX/116,72/forecast'


fetch(weatherApiUrl)
    .then(response => response.json())
    .then((weatherJson)=>{
        console.log(weatherJson)
    let periodsArray=weatherJson.properties.periods
})