const modelMessage = require("./model")

let createOne = (message) => {
    modelMessage.insertMany([message])
}

let getAll = async ({user}) => {
    const query= user? {user:user}:{} ;
    const messages = await modelMessage.find(query)
    return messages
}
let updateOne = async (id, message) => {
    const messageUpdate = await modelMessage.updateOne({_id:id }, {message: message})
    return messageUpdate
}

module.exports  = {
    getAll,
    createOne,
    updateOne,
}