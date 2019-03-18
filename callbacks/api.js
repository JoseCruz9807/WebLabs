const weather = require('./weather.js')
const city ='Monterrey'

weather.getCityWeather(city)

weather.getCityWeather(city, function(error, response){
    if(error){
        console.log("ERROR: ", error);
    }
    else{
        weather.getWeather(response.latitud, response.longitud, function(error, response2){
            if (error){
                console.log("ERROR: ", error);
            }
            else{
                console.log(response2.forecast);
            }
        })
    }

})