//npm init
//npm install express
//run it node app.js
const geocode = require('./geocode.js')
const forecast = require('./forecast.js')
const colors = require('colors')
const express = require("express")
const port = process.env.PORT || 3002
const path = require("path")
//always begin like this. Set up instance of express
const app = express();

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))
// console.log(publicDirectory)

// const me = {
//     name:"bruce",
//     age:"30"
// }

// app.get('/', (req, res) => {
//     // res.send("Hello Bruce 2")     //this displays in browser in localhost:3002
// })
// app.get('/name', (req, res) => {
//     res.send("My name is Bruce")     //this displays in browser in localhost:3002
// })
// app.get('/me', (req, res) => {
//     res.send(me)     //this displays in browser in localhost:3002
// })
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send("Please provide a location")
    } else{
        geocode (req.query.address, (error, {latitude, longitude, location}) => {
            if (error) {
                return res.send(error)
            }
    
            forecast(latitude, longitude, (error, forecastData) => {
                if (error){
                    return res.send(error)
                }
                res.send({
                    forecast: forecastData,
                    location: location,
                    address: req.query.address,
                })
            })
        })
    }

})
app.listen(port, () => {
    console.log(`server on port 3002`)
})

