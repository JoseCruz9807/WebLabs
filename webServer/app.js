const express = require ('express')
const path = require('path')
const app = express()
const publicDir = path.join(__dirname,'public')
const weather = require('./weather.js')
const port = process.env.PORT || 3000
//npm install express
//npm install request
//npm install path
app.use(express.static(publicDir))


app.get('/weather', function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*')
    if(!req.query.search){
            res.send({
            error:'Tienes que dar una ciudad'
        })
    }
    weather.getCityWeather(req.query.search, function(error, response){
            if(error){
                return res.send({
                    error: error
                })
            }
            else{
                return weather.getWeather(response.latitud, response.longitud, function(error,response2){
                    if(error){
                        return res.send({
                            error: error
                        })
                    }
                    return res.send({
                        location: req.query.search,
                        weather: response2.forecast
                    })
                }
                )
            }
        })
})


app.get('*', function(req, res){
    res.send({
        error:'Esta ruta no existe'
    })
})

app.listen(port, function(){
    console.log('up and running')
})
//npm install -g nodemon 