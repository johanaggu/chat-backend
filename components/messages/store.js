const modelMessage = require("./model")

let createOne = async (message) => {
    let messageCreated = await modelMessage.insertMany([message])
    return messageCreated
}

let getAll = ({user}) => {
    return new Promise((resolve, reject)=>{
        const query= user? {user:user}:{} ;
        modelMessage
            .find(query)
            .populate("user")
            .exec((err, populated)=>{
                if (err) {
                    reject(err)
                }else{
                    resolve(populated)
                }
            })
    }) 
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