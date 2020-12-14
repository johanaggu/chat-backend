let { createOne, getAll }  = require("./store")

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
let getMessages = () => {
    return new Promise((resolve, reject)=>{
       let getMessages =  getAll()
       resolve(getMessages)
    })
}
module.exports = {
    addMessages,
    getMessages
}