const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/125a1c8e99d627ad363d67039c8e9087/'+ encodeURIComponent(latitude) +',' + encodeURIComponent(longitude)

    request({ url, json: true }, (error, { body }) =>{
        if (error) {
            callback('Unable to connect to weather service...', undefined)
        }else if(body.error){
            callback('Unable to find location...', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.  There is a ' + body.currently.precipProbability + '% chance of rain. ' + body.currently.humidity + '% is the current humidty and winds are currently ' + body.currently.windSpeed + ' MPH with gusts up to ' + body.currently.windGust + ' MPH.')
        }
    })

}

module.exports = forecast