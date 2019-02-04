
const config = require('../Config/locationConfig')
const dataFormater = (news,weather)=> {
    let formatedData = [];
    var articles = news.articles;
    var forecast = weather.forecast.forecastday;

    for(var i = 0; i < 7 ; i++){
        let dataObj = {
            news: newCleaner(articles[i]),
            weather: weatherCleaner(forecast[i]),
            current: weather.current
        }
        formatedData.push(dataObj)
    }
    return formatedData
}

const newCleaner = (news) => {
    let removeFields = config.removeElements.news;
    for(var i = 0 ; i < removeFields.length ; i++){
        delete news[removeFields[i]]
    }
    return news
}

const weatherCleaner = (weather) => {
    let removeFields = config.removeElements.weather;
    delete weather.date_epoch
    delete weather.astro
    for(var i = 0 ; i < removeFields.length ; i++){
        delete weather.day[removeFields[i]]
    }
    return weather
}


module.exports ={
    dataFormater
}
