const express = require("express");
const router = express.Router();
const requestSender = require('../../util/requestSender')
const {errorHandler} = require('../../util/errorHandler')
const {dataFormater} = require('../../util/dataFormater')
router.get("/cityinfo/:location",(req, res) => {
    var location = req.params.location
    var from = req.params.from;
    var to = req.param.to;
    requestSender.getWeatherData(location).then(
        (weather)=> {
            requestSender.getNewsData(location,from,to).then(
                (news) => {
                    let data = dataFormater(news,weather)
                    res.status(200).json(data)
                }
            ).catch(
                err => {
                    errorHandler(err,res)
                }
            )
        }
    ).catch(
        err => {
            errorHandler(err,res)
        }
    )

});


module.exports = router;