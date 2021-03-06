const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c914626a7077cb5f5f03ec1cc6017b8a&query=&units=f' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {//json : true as we want the request to be parse as json
        if (error) {
            callback('Unable to connect to weather service Application!', undefined)// error if the app is not connected to the network
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(+ response.body.current.weather_description[0] + ". It is currently " + response.body.current.temperature + "degrees outside and it feels like"+ response.body.current.feelslike + "degree out. " )
        }
    })
}

module.exports = forecast

//(+ response.body.current.weather_description[0] + ". It is currently " + response.body.current.temperature + "degrees outside and it feels like"+ response.body.current.feelslike + "degree out. " )

//geocode url
/**https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmx5bm4tcmlkZXIiLCJhIjoiY2trNmk3MHg0MDQ4bzJwcDhqYTY3NGJrbCJ9.dybAh1TgU0rrekwNOmkRBg */

//'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmx5bm4tcmlkZXIiLCJhIjoiY2trNmk3MHg0MDQ4bzJwcDhqYTY3NGJrbCJ9.dybAh1TgU0rrekwNOmkRBg&limit=1'

//forecast url
/**const url = 'http://api.weatherstack.com/current?access_key=c914626a7077cb5f5f03ec1cc6017b8a&query=20.5937,78.9629&units=f' */


/**
 * 
 * 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmx5bm4tcmlkZXIiLCJhIjoiY2trNmk3MHg0MDQ4bzJwcDhqYTY3NGJrbCJ9.dybAh1TgU0rrekwNOmkRBglimit=1'
 * 
 * 
 * 'http://api.weatherstack.com/current?access_key=c914626a7077cb5f5f03ec1cc6017b8a' + latitude + ',' + longitude
 */