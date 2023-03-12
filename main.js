const apiKey = "cbdb33f975ca48b59c130513231203"

var country;
var localTime;
var temperature;
var feelsLike;
var weatherCondition;
var weatherImg;

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
                localTime = res.location.localtime
                temperature = res.current.temp_f
                feelsLike = res.current.feelslike_f
                weatherCondition = res.current.condition.text
                weatherImg = `http://${res.current.condition.icon}`
                document.getElementById('weather-image').src = weatherImg
            })

    }
};
  
function updateData(){
    console.log(weatherImg)
    
}

