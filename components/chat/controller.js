const {create, find } = require("./store")

let createChat = async (users) => {
    try {
        if (users && Array.isArray(users)) {
            let chatCreated = await create(users)
            return chatCreated
            
        }
    } catch (error) {
        return error
    }
}
let getChat = (userId) => {
    return new Promise(async (resolve, reject)=>{
        const chatUser = await find(userId)
        resolve(chatUser)
    })
}

module.exports = {
    createChat, 
    getChat
}