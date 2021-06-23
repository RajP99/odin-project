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
        console.log(info["weather"][0]);

        const test = document.getElementById("test");
        const title = document.createElement("h3");
        title.textContent = info["weather"][0]["description"];
        test.appendChild(title);
    } catch (error) {
        alert("Please enter a valid City!");
    }
});