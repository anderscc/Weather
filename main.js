const apiKey = "cbdb33f975ca48b59c130513231203"

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

function checkLocation(e){
    e.preventDefault();
    city = document.getElementById("city");
    
  
    if (city.value == "") {
        alert("A location must be entered!")
      return
    } else {
        var cityValue = document.querySelector('input').value
        var baseUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityValue}`

        fetch(baseUrl).then(res=>res.json())
            .then(res=>{
                console.log(res)
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
    document.getElementById('weather-image').src = ""
    document.getElementById('weather-image').src = weatherImg
    document.getElementById('local-time').innerText = `Current Time: ${localTime}`
    document.getElementById('temp').innerText = `Current Temperature: ${temperature}`
    document.getElementById('feels-like').innerText = `Feels Like: ${feelsLike}`
    document.getElementById('condition').innerText = `${weatherCondition}`
    document.getElementById('winds').innerText = `Winds: ${wind}`
    document.getElementById('city-state').innerText=`${cityName}, ${region}`
    document.getElementById('country').innerText=`${country}`

    let details = document.getElementById('weather-details');
    console.log(details)
    details.removeAttribute("hidden");    
    //document.getElementById('winds').src = weatherImg
}

function updateBackground(){
    return
}
