const userModel = require("./model")

let createOne = (user) => {
    let userCreated = userModel.insertMany([user])
    return userCreated
}

// let getAll = async ({id}) => {
//     const query= id? {_id:id}:{} ;
//     const messages = await userModel.find(query)
//     return messages
// }
// let updateOne = async (id, message) => {
//     const messageUpdate = await userModel.updateOne({_id:id }, {message: message})
//     return messageUpdate
// }

module.exports  = {
    createOne,
    // getAll,
    // updateOne,
}