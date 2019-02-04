const errorHandler = (err,res) => {
    console.log(err);
    res.status(500).json(
        {msg: "Something went wrong"}
    )
}

module.exports = {
    errorHandler
}