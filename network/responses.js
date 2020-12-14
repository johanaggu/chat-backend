let succes = (req, res, message, status, details) => {
    res.status(status || 200).json({
        message,
        data: [...details]
    })
}
let error = (req, res, message, status, details) => {
    res.status(status || 500).json({
        message,
        data: [...details]
    })
    
}



module.exports = {
    succes,
    error
}