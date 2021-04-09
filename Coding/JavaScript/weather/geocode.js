const request = require('request')

const geocode = (address, callback) => {
    const mapurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYnJ1Y2ViZWxjaGVyIiwiYSI6ImNqeG9wbTNjODA4amYzZG52dXhtcTNpcjEifQ.rypAzAavzNzJq7phFKUn-Q`

    request ({url:mapurl, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to location service", undefined)
            // console.log("oops, can't connect to DarkSky. Check internet")
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
            // const data=response.body
            // console.log(data.features[0].center[0], data.features[0].center[1])
            // console.log(data.features[0].place_name)
        } //end else
    })
}



module.exports = geocode