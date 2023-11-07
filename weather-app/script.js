const apiKey = "9f6e84608730a8830d7f40c37954619c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city = "thailand") {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    console.log("error");
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
      case "Thunderstorm":
        weatherIcon.src = "https://openweathermap.org/img/wn/11d@4x.png";
        break;
      case "Drizzle":
        weatherIcon.src = "https://openweathermap.org/img/wn/09d@4x.png";
        break;
      case "Rain":
        weatherIcon.src = "https://openweathermap.org/img/wn/10d@4x.png";
        break;
      case "Snow":
        weatherIcon.src = "https://openweathermap.org/img/wn/13d@4x.png";
        break;
      case "Atmosphere":
        weatherIcon.src = "https://openweathermap.org/img/wn/50d@4x.png";
        break;
      case "Clear":
        weatherIcon.src = "https://openweathermap.org/img/wn/01d@4x.png";
        break;
      case "Clouds":
        weatherIcon.src = "https://openweathermap.org/img/wn/02d@4x.png";
        break;
      default:
        weatherIcon.src =
          "https://cdn-icons-png.flaticon.com/512/1178/1178479.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchButton.addEventListener("click", () => {
  if (searchBox.value) {
    checkWeather(searchBox.value);
    console.log("Hello");
  }
});
