
// Устанавливаем api по умолчанию в Москве (при запуске)
const apiKey = 'be94696afb8588ce92c9595cd66f461d';
let city = 'Москва'
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Выборка DOM элементов
const weatherDetails = document.querySelector('.details__section');
const mainWeatherInfo = document.querySelector('.main__container');
// Объект со всеми DOM элементами, которые нужно менять
const weatherDetailsDOM = {
    city: mainWeatherInfo.querySelector('.main__city'),
    temp: mainWeatherInfo.querySelector('.main__temp'),
    maxTemp: weatherDetails.querySelector('.detail__max-temp'),
    minTemp: weatherDetails.querySelector('.detail__min-temp'),
    humadity: weatherDetails.querySelector('.detail__humadity'),
    cloudy: weatherDetails.querySelector('.detail__cloudy'),
    wind: weatherDetails.querySelector('.detail__wind'),
    date: mainWeatherInfo.querySelector('.main__date')
}

// Устанавливаем погоду по умолчанию в Москве (при запуске)
serverRequest(api)
    .then(weather => {
        if (weather !== undefined) {
            weatherDetailsDOM.city.innerText = city;
            weatherDetailsDOM.temp.innerText = `${weather.temp}°`;
            weatherDetailsDOM.maxTemp.innerText = `${weather.maxTemp}°`;
            weatherDetailsDOM.minTemp.innerText = `${weather.minTemp}°`;
            weatherDetailsDOM.humadity.innerText = `${weather.humadity}%`;
            weatherDetailsDOM.cloudy.innerText = `${weather.cloudy}%`;
            weatherDetailsDOM.wind.innerText = `${weather.wind}km/h`;
        }
        const currentDate = newDate();
        weatherDetailsDOM.date.innerText = `${currentDate.dayOfWeek}, ${currentDate.monthNumber} ${currentDate.shortMonth} ${currentDate.dayOfMonth}`
    })
    .catch((err) => {

    })







// Устанавливаем погоду в городе пользователя через поиск
const searchDOM = document.querySelector('.search__main');

// Создаем слушатель событий для поиска
searchDOM.addEventListener('input', () => {
    const apiKey = 'be94696afb8588ce92c9595cd66f461d';
    const city = searchDOM.value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    serverRequest(api)
        .then(weather => {
            if (weather !== undefined) {
                weatherDetailsDOM.city.innerText = city;
                weatherDetailsDOM.temp.innerText = `${weather.temp}°`;
                weatherDetailsDOM.maxTemp.innerText = `${weather.maxTemp}°`;
                weatherDetailsDOM.minTemp.innerText = `${weather.minTemp}°`;
                weatherDetailsDOM.humadity.innerText = `${weather.humadity}%`;
                weatherDetailsDOM.cloudy.innerText = `${weather.cloudy}%`;
                weatherDetailsDOM.wind.innerText = `${weather.wind}km/h`;
            }
        })

})
