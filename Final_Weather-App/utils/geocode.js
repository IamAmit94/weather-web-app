const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmx5bm4tcmlkZXIiLCJhIjoiY2trNmk3MHg0MDQ4bzJwcDhqYTY3NGJrbCJ9.dybAh1TgU0rrekwNOmkRBg&limit=1'

    request({ url, json: true }, (error, { body }) => {//json : true as we want the request to be parse as json
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.feature.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
