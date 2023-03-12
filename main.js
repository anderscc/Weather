apiKey = "cbdb33f975ca48b59c130513231203"
location = "London"
baseUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`

var country;
var localTime;
var temperature;
var feelsLike;
var weatherCondition;
var weatherImg;

result = fetch(baseUrl)
            .then(res=>{
                country = res.location.country
                localTime = res.location.localtime
                temperature = res.current.temp_f
                feelsLike = res.current.feelslike_f
                weatherCondition = res.current.condition.text
                weatherImg = res.current.condition.icon
            })
console.log(result)

// {
//     "location": {
//         "name": "London",
//         "region": "City of London, Greater London",
//         "country": "United Kingdom",
//         "lat": 51.52,
//         "lon": -0.11,
//         "tz_id": "Europe/London",
//         "localtime_epoch": 1678592851,
//         "localtime": "2023-03-12 3:47"
//     },
//     "current": {
//         "last_updated_epoch": 1678591800,
//         "last_updated": "2023-03-12 03:30",
//         "temp_c": 8.0,
//         "temp_f": 46.4,
//         "is_day": 0,
//         "condition": {
//             "text": "Partly cloudy",
//             "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
//             "code": 1003
//         },
//         "wind_mph": 10.5,
//         "wind_kph": 16.9,
//         "wind_degree": 260,
//         "wind_dir": "W",
//         "pressure_mb": 1006.0,
//         "pressure_in": 29.71,
//         "precip_mm": 0.3,
//         "precip_in": 0.01,
//         "humidity": 93,
//         "cloud": 75,
//         "feelslike_c": 5.3,
//         "feelslike_f": 41.6,
//         "vis_km": 10.0,
//         "vis_miles": 6.0,
//         "uv": 1.0,
//         "gust_mph": 16.1,
//         "gust_kph": 25.9
//     }
// }