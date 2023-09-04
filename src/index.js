function formatDate(date) {
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${day} ${hours}:${minutes}`;
}

let currentDay = document.querySelector("#date");
let currentTime = new Date();
currentDay.innerHTML = formatDate(currentTime);

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  city.innerHTML = cityInput.value;

  let apiKey = "c7fccbc818f601b5f8b90c918db77c2c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  console.log(apiUrl);
}

let city = document.querySelector("#search-city");
city.addEventListener("submit", changeCity);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 82.4;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 28;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

//Week 5
let apiKey = "c7fccbc818f601b5f8b90c918db77c2c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

function showTemperature(response) {
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  let humidity = response.data.main.humidity;
  let newHumidity = document.querySelector("#humidity");
  newHumidity.innerHTML = `Humidity: ${humidity}%`;

  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${windSpeed} km/h`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

function showPosition(position) {
  console.log(position);
}

navigator.geolocation.getCurrentPosition(showPosition);

function changeWeather(response) {
  let apiKey = "c7fccbc818f601b5f8b90c918db77c2c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  let humidity = response.data.main.humidity;
  let newHumidity = document.querySelector("#humidity");
  newHumidity.innerHTML = `Humidity: ${humidity}%`;

  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${windSpeed} km/h`;
}
