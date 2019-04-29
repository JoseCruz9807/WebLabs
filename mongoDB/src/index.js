const express= require('express')

require('./db/mongoose.js')
const router = require ('./routes.js')

const app = express()

const port = process.env.PORT || 3000


app.use(express.json())         //Parsea a json
app.use(router)

app.listen(port, function(){
    console.log("Server up and running on port "+port)
})