
// npm Int
//npm install
//run it with node app.js

const geocode = require('./geocode.js')
const forecast = require('./forecast.js')
const colors = require('colors')
const address = process.argv[2]

if (!address) {
    console.log(`Please provide a location`)
} else{
    geocode (address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log (error)
            }
            console.log("____________________________________________")
            console.log(location.blue)
            console.log(forecastData.red)
            console.log("____________________________________________")
        })
    })
}

// forecast("https://api.darksky.net/forecast/8dbe22de8e68e04faa4f5a9b46a003ad/37.8267,-122.4233")