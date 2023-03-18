const apiKey = config.apiKey
const googleApiKey = config.googleApiKey
var cityValue

var placeId
var photoReference
var photoURL
const googleUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${cityValue}&types=(cities)&key=${googleApiKey}`
const googleUrl2 = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photo&key=${googleApiKey}`
const googleUrl3 = `https://maps.googleapis.com/maps/api/place/photo?&photoreference=${photoReference}&key=${googleApiKey}`

var country;
var localTime;
var temperature;
var feelsLike;
var weatherCondition;
var weatherImg;
var cityName;
var wind;
var region;

let weatherForm = document.getElementById("weatherForm")
weatherForm.addEventListener("submit", checkLocation)

async function checkLocation(e){
    e.preventDefault();
    city = document.getElementById("city");
    
  
    if (city.value == "") {
        alert("A location must be entered!")
      return
    } else {
        cityValue = document.querySelector('input').value
        var baseUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityValue}`

        const resp = await fetch(baseUrl).then(res=>res.json())
        weatherDetails = await resp.json().then(res=>{
            country = res.location.country
            cityName = res.location.name
            region = res.location.region
            localTime = res.location.localtime
            temperature = res.current.temp_f
            wind = res.current.wind_mph
            feelsLike = res.current.feelslike_f
            weatherCondition = res.current.condition.text
            weatherImg = `http://${res.current.condition.icon}`
            updateData()          
        })
    }
};

function updateData(){
    const weatherImage = document.getElementById('weather-image').src = ""
    weatherImage.src = weatherImg
    document.getElementById('local-time').innerText = `Current Time: ${localTime}`
    document.getElementById('temp').innerText = `Current Temperature: ${temperature} \u00B0 `
    document.getElementById('feels-like').innerText = `Feels Like: ${feelsLike} \u00B0 `
    document.getElementById('condition').innerText = `${weatherCondition}`
    document.getElementById('winds').innerText = `Winds: ${wind} mph`
    document.getElementById('city-state').innerText=`${cityName}, ${region}`
    document.getElementById('country').innerText=`${country}`

    let details = document.getElementById('weather-card');
    details.removeAttribute("hidden"); 
    details.style.display = "flex";  
}


// function getPicture(){
//     fetch(googleUrl)
//         .then(res=>res.json())
//         .then(res=>res.predictions)
//         .then(res=>{
//             console.log(res)
//             placeId = res.place_id
//             })
// }