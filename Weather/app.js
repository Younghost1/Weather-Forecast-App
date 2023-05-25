const apiKey = "bbb144fe25f580c80cb41aa91eb3a075";
const weatherDiv = document.getElementById("weather");
const weatherImageDiv = document.getElementById("weather-image");

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const unit = document.getElementById("unit").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weather = data.weather[0].main;
            const description = data.weather[0].description;
            let weatherImage;
            switch (weather) {
                case "Clear":
                    weatherImage = "sunny.svg";
                    break;
                case "Clouds":
                    weatherImage = "cloudy.svg";
                    break;
                case "Rain":
                    weatherImage = "rainy.svg";
                    break;
                case "Snow":
                    weatherImage = "snowy.svg";
                    break;
					
				case "Mist":
                    weatherImage = "misty.svg";
                    break;
                default:
                    weatherImage = "default.svg";
            }
            weatherImageDiv.innerHTML = `<img src='${weatherImage}' class='weather-img' alt='${weather}'/>`;


        weatherDiv.innerHTML = `
			<p class="temperature">Current temperature: ${temperature}°</p>
			<p class="weather">Weather: ${weather}</p>
			<p class="description">Description: ${description}</p>
		`;
    })
    .catch(error => {
        console.error(error);
        weatherDiv.innerHTML = "<p>Error fetching weather updates</p>";
    });
});
