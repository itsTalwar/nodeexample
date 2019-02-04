const locationConfig = require('../Config/locationConfig')
const locationInfo = (type)=> {
    var location = [];
    switch (type) {
        case 'city':  
            location = locationConfig.city
            break;
        case 'country':  
            location = locationConfig.country
            break;
        case 'continent':  
            location = locationConfig.continent
            break;
    }
    return location;
}

const listOfArea = (query)=> {

    if(query.hasOwnProperty('country')){
        return locationConfig.world.continents[query.continent][query.country]
    }
    else if(query.hasOwnProperty('continent')){
        return locationConfig.world.continents[query.continent]
    }
}


module.exports ={
    locationInfo,
    listOfArea
}
