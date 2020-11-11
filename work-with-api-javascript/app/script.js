fetch('http://api.openweathermap.org/data/2.5/weather?id=2051523&appid=75aad53b238de69e31abd56b631a3251')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'm/с';
    })
    .catch(function () {
        // catch any errors
    });