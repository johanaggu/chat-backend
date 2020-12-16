const { socket } = require("../../socket");
let { createOne, getAll, updateOne }  = require("./store")

let addMessages = (user, message, chat, file)=>{
    return new Promise((resolve, reject)=>{
        if(!user || !message || !chat) {
             console.log("[No hay usuario o contraseña]");
            return reject("DATA INCORRECTA")
        } 
        let fileUrl = "";

        if (file) {
            fileUrl = "http://localhost:4000/static/files/"+file.filename
            console.log(fileUrl);
        }
        const fullMessage = {
            user,
            message,
            chat,
            file: fileUrl,
            date: new Date()
        }
        let messageCreated = createOne(fullMessage)
        socket.io.emit("message", fullMessage)
        resolve(messageCreated)
    })
}
let getMessages = ({user}) => {
    return new Promise((resolve, reject)=>{
       getAll({user})
        .then(getMessages=>{
            resolve(getMessages) 
        })
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