
const mongoose = require("mongoose")
const credentials = require('./credentials.js')
const connectionURL = credentials.connectionSting

mongoose.connect(connectionURL,{
    useNewUrlParser: true,
    useCreateIndex: true
})

