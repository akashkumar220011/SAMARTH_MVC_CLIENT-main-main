const express = require('express')
const cors = require('cors')
const mongoDB = require('./config/mongoose')
const PORT= 8000
const app = express()

app.use(cors())

app.use(express.json())

app.use('/', require('./routes'))


mongoDB.then( () => {
    app.listen(PORT, () => {
        console.log("Server is running!")
    })
} ).catch((error) => {
    console.log("Error in connecting to DB!")
})

