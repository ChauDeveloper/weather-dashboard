var formEl = document.querySelector("#form");
var cityInputEl = document.querySelector("#city");
var historyEl = document.querySelector("#search-history");
var cityResultEl = document.querySelector("#city-result");
var today = document.querySelector ("#today")
var icon = document.querySelector ("#icon")
var temp = document.querySelector ("#temp")
var cityname = document.querySelector ("#cityname")
var wind = document.querySelector ("#wind")
var humidity = document.querySelector ("#humidity")
var uv = document.querySelector ("#uv")
var weathericon = document.querySelector ("#icon")
var forecastEl = document.querySelector("#forecast");
var icon1 = document.querySelector("#icon1");
var icon2 = document.querySelector("#icon2");
var icon3 = document.querySelector("#icon3");
var icon4 = document.querySelector("#icon4");
var icon5 = document.querySelector("#icon5");
var date1 = document.querySelector("#date1");
var date2 = document.querySelector("#date2");
var date3 = document.querySelector("#date3");
var date4 = document.querySelector("#date4");
var date5 = document.querySelector("#date5");
var icon1 = document.querySelector("#icon1");
var icon2 = document.querySelector("#icon1");
var icon3 = document.querySelector("#icon1");
var icon4 = document.querySelector("#icon1");
var icon5 = document.querySelector("#icon1");
var temp1 = document.querySelector("#temp1");
var temp2 = document.querySelector("#temp2");
var temp3 = document.querySelector("#temp3");
var temp4 = document.querySelector("#temp4");
var temp5 = document.querySelector("#temp5");
var wind1 = document.querySelector("#wind1");
var wind2 = document.querySelector("#wind2");
var wind3 = document.querySelector("#wind3");
var wind4 = document.querySelector("#wind4");
var wind5 = document.querySelector("#wind5");
var humidity1 = document.querySelector("#humidity1");
var humidity2 = document.querySelector("#humidity2");
var humidity3 = document.querySelector("#humidity3");
var humidity4 = document.querySelector("#humidity4");
var humidity5 = document.querySelector("#humidity5");


var formSubmitHandler = function(event) {
      event.preventDefault();
      var city = cityInputEl.value.trim()
      cityInputEl.textContent = city
      var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9a5fdca9a71d82a27d3bad8acdad7812";

      fetch(apiUrl).then(function(response) {
            if (response.ok) {
              response.json().then(function(data) {
                cityname.textContent = city;
                today.textContent = moment().format('L, h:mm a');

                
                var iconEl = document.createElement ("img");
                iconEl.src = "http://openweathermap.org/img/wn/" + data['weather']["0"]['icon'] + "@2x.png"
                icon.appendChild(iconEl);

                temp.textContent ="Temperature: " + data['main']['temp'] + " °F";
                wind.textContent = "Wind: " + data['wind']['speed'] + " MPH"; 
                humidity.textContent = "Humidity: " + data['main']['humidity'] + " %";
              
                var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data['coord']['lat'] + "&lon=" + data['coord']['lon'] + "&appid=9a5fdca9a71d82a27d3bad8acdad7812"

              fetch(uvUrl).then(function(currentinfo) {
                if (currentinfo.ok) {
                currentinfo.json().then(function(uvinfo) {
                  uv.textContent = "UV Index: " + uvinfo['current']['uvi']
                
                })
              }
              })
              });
            }
            else {
                cityResultEl.textContent = "No City Found!"
            }
            })

      var forecastUrl= "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=9a5fdca9a71d82a27d3bad8acdad7812";
      fetch(forecastUrl).then(function(response) {
        if (response.ok) {
          response.json().then(function(dataforecast) {
            date1.textContent = moment().add(1, 'days').format('L');
            var icon1El = document.createElement ("img");       
                icon1El.src = "http://openweathermap.org/img/wn/" + dataforecast['list']["3"]['weather']["0"]['icon'] + "@2x.png"
                day1.appendChild(icon1El);
            temp1.textContent = "Temp: " + dataforecast['list']["3"]['main']['temp']+ " °F";
            wind1.textContent = "Wind: " + dataforecast['list']["3"]['wind']['speed']+ " MPH";
            humidity1.textContent ="Humidity: " + dataforecast['list']["3"]['main']['humidity'];

            date2.textContent = moment().add(2, 'days').format('L');
            var icon2El = document.createElement ("img");            
                icon2El.src = "http://openweathermap.org/img/wn/" + dataforecast['list']["10"]['weather']["0"]['icon'] + "@2x.png"
                day2.appendChild(icon2El);
            temp2.textContent = "Temp: " + dataforecast['list']["10"]['main']['temp']+ " °F";
            wind2.textContent = "Wind: " + dataforecast['list']["10"]['wind']['speed']+ " MPH";
            humidity2.textContent ="Humidity: " + dataforecast['list']["10"]['main']['humidity'];

            date3.textContent = moment().add(3, 'days').format('L');
            var icon3El = document.createElement ("img");
                icon3El.src = "http://openweathermap.org/img/wn/" + dataforecast['list']["18"]['weather']["0"]['icon'] + "@2x.png"
                day3.appendChild(icon3El);
            temp3.textContent = "Temp: " + dataforecast['list']["18"]['main']['temp']+ " °F";
            wind3.textContent = "Wind: " + dataforecast['list']["18"]['wind']['speed']+ " MPH";
            humidity3.textContent ="Humidity: " + dataforecast['list']["18"]['main']['humidity'];

            date4.textContent = moment().add(4, 'days').format('L');
            var icon4El = document.createElement ("img");
                icon4El.src = "http://openweathermap.org/img/wn/" + dataforecast['list']["26"]['weather']["0"]['icon'] + "@2x.png"
                day4.appendChild(icon4El);
            temp4.textContent = "Temp: " + dataforecast['list']["26"]['main']['temp']+ " °F";
            wind4.textContent = "Wind: " + dataforecast['list']["26"]['wind']['speed']+ " MPH";
            humidity4.textContent ="Humidity: " + dataforecast['list']["26"]['main']['humidity'];

            date5.textContent = moment().add(5, 'days').format('L');
            var icon5El = document.createElement ("img");
                icon5El.src = "http://openweathermap.org/img/wn/" + dataforecast['list']["36"]['weather']["0"]['icon'] + "@2x.png"
                day5.appendChild(icon5El);
            temp5.textContent = "Temp: " + dataforecast['list']["36"]['main']['temp']+ " °F";
            wind5.textContent = "Wind: " + dataforecast['list']["36"]['wind']['speed']+ " MPH";
            humidity5.textContent ="Humidity: " + dataforecast['list']["36"]['main']['humidity'];


            console.log (dataforecast['list']["3"]['weather']["0"]['icon'])
            
                
          });
        }
      });
    }

formEl.addEventListener("submit", formSubmitHandler);
    