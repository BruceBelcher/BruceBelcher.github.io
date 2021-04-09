const request = require("request")
const colors = require('colors')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/8dbe22de8e68e04faa4f5a9b46a003ad/${latitude},${longitude}`

    request ({url:url, json: true}, (error, {body}) => {
        if (error) {
            console.log("Unable to connect to weather service", undefined)
        } else {
            callback(
                undefined,
                `\n${body.daily.data[0].summary} 
                \nIt is currently ${body.currently.temperature} degrees out.
                \nThere is a ${body.currently.precipProbability}% chance of rain.`
            )
            // const data=response.body
            // console.log(data.currently)
        } //end else
    })
}

module.exports = forecast