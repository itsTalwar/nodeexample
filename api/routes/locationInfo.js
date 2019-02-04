const express = require("express");
const router = express.Router();
const {locationInfo,listOfArea} = require('../../util/locationInfo');


router.get("/list",(req, res) => {
    var type = req.query.type;

    res.status(200).json(locationInfo(type))

});

router.get("/area" , (req,res)=> {
    var query = req.query;

    res.status(200).json(listOfArea(query))

})


module.exports = router;