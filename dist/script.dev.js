"use strict";

var apiKey = "c00855649926cdd80f39d5e55c07d2bd";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");

function checkWeather(city) {
  var response, data;
  return regeneratorRuntime.async(function checkWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(apiUrl + city + "&appid=".concat(apiKey)));

        case 2:
          response = _context.sent;

          if (!(response.status == 404)) {
            _context.next = 8;
            break;
          }

          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
          _context.next = 18;
          break;

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(response.json());

        case 10:
          data = _context.sent;
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
          document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather-app-img/images/clouds.png";
          } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weather-app-img/images/clear.png";
          } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather-app-img/images/rain.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather-app-img/images/drizzle.png";
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather-app-img/images/mist.png";
          } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "weather-app-img/images/snow.png";
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
//# sourceMappingURL=script.dev.js.map
