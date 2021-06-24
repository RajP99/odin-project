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
let currentTemp = 0;

function clearCard() {
    while (card.firstChild) {
        card.removeChild(card.lastChild);
      }
}

function createCard(info) {

    const city = info["name"];
    const country = info["sys"]["country"];

    const location = document.createElement("h1");
    location.textContent = city + ", " + country;

    const temperature = document.createElement("h1");
    let temp = info["main"]["temp"];
    temp -= 273.1;
    temp = temp.toFixed(1);
    temperature.setAttribute("id", "temperature");
    temperature.textContent = temp + " °C";
    currentTemp = temp;

    const description = document.createElement("h1");
    description.textContent = info["weather"][0]["description"].toUpperCase();

    // const wind = document.createElement("h1");
    // wind.textContent = info["wind"]["speed"];
    
    const humidity = document.createElement("h1");
    humidity.textContent = "Humidity: " + info["main"]["humidity"] + "%";

    clearCard();

    card.appendChild(description);
    card.appendChild(location);
    card.appendChild(temperature);
    // card.appendChild(wind);
    card.appendChild(humidity);

    addToggle();
}

function addToggle() {
    const label = document.createElement("label");
    label.setAttribute("class", "switch");

    const checkbox = document.createElement("input");
    // checkbox.setAttribute("id", "degrees-slider")
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", function() {
        temperature = document.getElementById("temperature");
        if (currentUnit === "C") {
            currentUnit = "F"
            currentTemp = (currentTemp*1.8 + 32).toFixed(1)
            temperature.textContent = currentTemp + " °F";
        } else {
            currentUnit = "C"
            currentTemp = ((currentTemp-32)/1.8).toFixed(1);
            temperature.textContent = currentTemp + " °C";
        }
    })  

    const span = document.createElement("span");
    span.setAttribute("class", "slider round")

    label.appendChild(checkbox);
    label.appendChild(span);

    card.appendChild(label);
}

function clearInput() {
    const form = document.getElementById("city-form")
    form.reset();
}