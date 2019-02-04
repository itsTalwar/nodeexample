
const aisa = {
        'India': [
            'Delhi',
            'Chandigarh',
            'Mysore',
            'Chennai',
            'Gurugram'
        ],
        'China': [
            'Beijing',
            'Shanghai',
            'Shenzhen',
            'Guangzhou',
            'hangzhou'
        ] 
}
const northAmerica = {
        'USA': [
            'New York City',
            'Las Vegas',
            'Los Angeles',
            'San Francisco'
        ],
        'Canada': [
            'Toronto',
            'Vancouver',
            'Ottawa',
            'Montreal',
            'Calgary'
        ]
}
const world = {
    'continents': {
        aisa,
        northAmerica
    }
}

const removeElements = {
   weather: ['condition','mintemp_f','mintemp_c','avgtemp_f','avgtemp_c','maxwind_mph','totalprecip_mm','totalprecip_in','avgvis_km','avgvis_miles'],
   news: ['source','publishedAt']
}

module.exports ={
    world,
    removeElements
}
