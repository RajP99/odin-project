async function getWeather(city){
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=5f6862ebff52079393f3b18c6ff92976";
    const response = await fetch(url, {mode: "cors"});
    const weatherData = await response.json();
    return weatherData;
}

const form = document.getElementById("city-form");
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const city = document.getElementById("city-input");
    try {
        const info = await getWeather(city.value);

        createCard(info);

        clearInput();

    } catch (error) {
        console.log(error);
        alert("Please enter a valid City!");
    }
});

const card = document.getElementById("weather-card");
let currentUnit = "C"

function clearCard() {
    while (card.firstChild) {
        card.removeChild(card.lastChild);
      }
}

function createCard(info) {
    const city = document.createElement("h1");
    city.textContent = info["name"];

    const country = document.createElement("h1");
    country.textContent = info["sys"]["country"];

    const temperature = document.createElement("h1");
    let temp = info["main"]["temp"];
    temp -= 273.1;
    temp = temp.toFixed(1);
    temperature.setAttribute("id", "temperature");
    temperature.textContent = temp;

    const description = document.createElement("h1");
    description.textContent = info["weather"][0]["description"];

    const wind = document.createElement("h1");
    wind.textContent = info["wind"]["speed"];
    
    const humidity = document.createElement("h1");
    humidity.textContent = info["main"]["humidity"];

    clearCard();

    document.querySelector(".change-deg").classList.add("change-deg-active");

    card.appendChild(city);
    card.appendChild(country);
    card.appendChild(temperature);
    card.appendChild(description);
    card.appendChild(wind);
    card.appendChild(humidity);
}

function clearInput() {
    const form = document.getElementById("city-form")
    form.reset();
}

 document.getElementById("change-deg").addEventListener("click", function() {
    temperature = document.getElementById("temperature");
    if (currentUnit === "C") {
        currentUnit = "F"
        temperature.textContent = temperature.textContent*1.8 + 32;
    } else {
        currentUnit = "C"
        temperature.textContent = ((temperature.textContent-32)/1.8).toFixed(1);
    }
})  