let succes = (req, res, message, status) => {
    res.status(status || 200).json({
        message,
        data: []
    })
}
let error = (req, res, message, status, detalles) => {
    res.status(status || 500).json({
        message,
        data: [detalles]
    })
    
}



module.exports = {
    succes,
    error
}