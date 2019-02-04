const sendHTTP = require('./sendHTTP');

const getWeatherData = (location) => {
    let url = `http://api.apixu.com/v1/forecast.json?key=642c1c32b34e4fe5b58174832191301&q=${location}&days=7`
    return sendHTTP.sendRequest(url,'GET')
}

const getNewsData = (location,from,to) => {
    let url  =  `https://newsapi.org/v2/everything?q=${location}&from=${from}&to=${to}&sortBy=popularity&apiKey=15d50aedea3e4a35a53b21779edc39b8`
    return sendHTTP.sendRequest(url,'GET')
}


module.exports ={
    getWeatherData,
    getNewsData
}
