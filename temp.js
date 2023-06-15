const key = "a97da435941463579fade151f98767ff";

function putDateScreem(date) {
  console.log(date);

  document.querySelector(".city").innerHTML = "Tempo em " + date.name;
  document.querySelector(".temp").innerHTML = Math.floor(date.main.temp) + "°C";
  document.querySelector(".forecast-text").innerHTML =
    date.weather[0].description;
  document.querySelector(".unit").innerHTML =
    "Umidade: " + date.main.humidity + "%";
  document.querySelector(
    ".img-forecast"
  ).src = `https://openweathermap.org/img/wn/${date.weather[0].icon}.png`;
}

async function searchCity(city) {
  const date = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((Resposta) => Resposta.json());

  putDateScreem(date);
}

function clickButton() {
  const city = document.querySelector(".input-city").value;

  searchCity(city);
}
