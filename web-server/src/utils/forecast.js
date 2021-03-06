const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c914626a7077cb5f5f03ec1cc6017b8a' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degree out there. And it feels like to be " + body.current.feelslike + " degree outside")
        }
    })
}

module.exports = forecast


//geocode url
/**https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmx5bm4tcmlkZXIiLCJhIjoiY2trNmk3MHg0MDQ4bzJwcDhqYTY3NGJrbCJ9.dybAh1TgU0rrekwNOmkRBg */



//forecast url
/**const url = 'http://api.weatherstack.com/current?access_key=c914626a7077cb5f5f03ec1cc6017b8a&query=20.5937,78.9629' */