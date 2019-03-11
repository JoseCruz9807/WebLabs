const credentials = require('./credentials.js')
const request = require('request')

const getCityWeather = function (city, callback){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?access_token='+credentials.mapBoxKey

    request({url: url, json: true}, function(error, response){  

        getWeather( response.body.features[0].center[0],response.body.features[0].center[1] )

    })
}

const getWeather = function (lat, lon){
    
    const url = 'https://api.darksky.net/forecast/'+credentials.darkSkyKey+'/'+lon+','+lat+'?units=si'
    request({url: url, json: true}, function(error, response){
        console.log(response.body.daily.summary)
    })
}

module.exports= {
    getCityWeather: getCityWeather
}