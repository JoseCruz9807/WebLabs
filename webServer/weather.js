const credentials = require('./credentials.js')
const request = require('request')

const getCityWeather = function (city, callback){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?access_token='+credentials.mapBoxKey

    request({url: url, json: true}, function(error, response){  
        if(error){
            callback && callback('Service unavailable', undefined)
        }
        else if(response.body.message=="Not Authorized - Invalid Token"){
            callback && callback('Wrong api key', undefined)
        }
        else if(response.body.message=="Not Found"){
            callback && callback('No city entered', undefined)
        }
        else if(response.body.features.length==0){
            callback && callback('City not found', undefined)
        }
        else{
            const data={
                latitud: response.body.features[0].center[0],
                longitud: response.body.features[0].center[1]
            }
            callback && callback(undefined, data)
        }
        //getWeather( response.body.features[0].center[0],response.body.features[0].center[1] )

    })
}

const getWeather = function (lat, lon, callback){
    
    const url = 'https://api.darksky.net/forecast/'+credentials.darkSkyKey+'/'+lon+','+lat+'?units=si'
    request({url: url, json: true}, function(error, response){
        if(error){
            callback && callback('Service unavailable', undefined)
        }
        else if(response.statusCode==403){
            callback && callback('Wrong api key', undefined)
        }
        else if(response.body.code>=400&&response.body.code<=499){
            callback && callback('Wrong coordinates', undefined)
        }
        else{
            data={
                forecast: response.body.daily.summary
            }
            callback && callback(undefined, data)
        }
        //console.log(response.body.daily.summary)
    })
}

module.exports= {
    getCityWeather: getCityWeather,
    getWeather: getWeather
}