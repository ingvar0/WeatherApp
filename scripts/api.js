const apiKey = 'be94696afb8588ce92c9595cd66f461d';
const city = 'Москва'
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


fetch(api)
    .then((data) => data.json())
    .then((info) => {
        const weather = {
            temp: info.main.temp,
            minTemp: info.main.temp_min,
            maxTemp: info.main.temp_max,
            humidity: info.main.humidity,
            cloudy: info.clouds.all,
            wind: info.wind.speed
        }
        return weather;
    })
    .catch((err) => console.log(err))