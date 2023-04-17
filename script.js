const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8c70800525msh5128cc818a7e288p1463f4jsnba4cfbbd7771',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })

        .catch(err => console.error(err));

}
submt.addEventListener("click", (e) => {
    e.PreventDefault()
    getweather(city.value)
})
getweather("Delhi");
