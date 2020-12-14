const userModel = require("./model")

let createOne = async (user) => {
    let userCreated = await userModel.insertMany([user])
    return userCreated
}
let getAll = async (userId) => {
    let query = userId ? {_id: userId}: {}    
    let users = await userModel.find(query)
    return users
}


module.exports  = {
    createOne,
    getAll,
}