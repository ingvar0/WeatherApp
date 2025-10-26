

function serverRequest(api) {
    return fetch(api)
        .then((data) => data.json())
        .then((info) => {
            if (info.cod !== '404' && info.cod !== '400') {
                const weather = {
                    temp: info.main.temp,
                    minTemp: info.main.temp_min,
                    maxTemp: info.main.temp_max,
                    humadity: info.main.humidity,
                    cloudy: info.clouds.all,
                    wind: info.wind.speed
                }
                return weather;
            } else {
                return undefined;
            }
        })
        .catch((err) => {
            return err;
        })
}


// async function serverRequest(api) {
//     try {
//         const response = await fetch(api);
//         const info = await response.json();

//         const weather = {
//             temp: info.main.temp,
//             minTemp: info.main.temp_min,
//             maxTemp: info.main.temp_max,
//             humidity: info.main.humidity,
//             cloudy: info.clouds.all,
//             wind: info.wind.speed
//         };

//         return weather;
//     } catch (err) {
//         console.error("Ошибка при получении данных:", err);
//         return null;
//     }
// }
