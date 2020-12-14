const messageModel = require("./model");
let { createOne, getAll, updateOne }  = require("./store")

let addMessages = (user, message)=>{
    return new Promise((resolve, reject)=>{
        if(!user || !message) {
             console.log("[No hay usuario o contraseña]");
            return reject("DATA INCORRECTA")
        } 
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        createOne(fullMessage)
        resolve(fullMessage)
    })
}
let getMessages = ({user}) => {
    return new Promise((resolve, reject)=>{
       let getMessages =  getAll({user})
       resolve(getMessages)
    })
}
let updateMessage = (id , message)=>{
    return new Promise(async(resolve, reject)=>{
        if(!id || !message){
            reject("No hay id o message")
            return false
        }
        const messageUpdated = await updateOne(id,message)
        resolve(messageUpdated)
    })
}
module.exports = {
    addMessages,
    getMessages,
    updateMessage
}