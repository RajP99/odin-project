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
        console.log(info);

        createCard(info);

    } catch (error) {
        alert("Please enter a valid City!");
    }
}); 

function createCard(info) {
        const card = document.getElementById("weather-card");

        const city = document.createElement("h1");
        city.textContent = info["name"];

        const country = document.createElement("h1");
        country.textContent = info["sys"]["country"];

        const temperature = document.createElement("h1");
        temperature.textContent = info["main"]["temp"];

        const description = document.createElement("h1");
        description.textContent = info["weather"][0]["description"];

        const wind = document.createElement("h1");
        wind.textContent = info["wind"]["speed"];
        
        const humidity = document.createElement("h1");
        humidity.textContent = info["main"]["humidity"];

        card.appendChild(city);
        card.appendChild(country);
        card.appendChild(temperature);
        card.appendChild(description);
        card.appendChild(wind);
        card.appendChild(humidity);
}