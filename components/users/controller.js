let { createOne/* , getAll, updateOne */ }  = require("./store")

let addMessages = (user)=>{
    
    return createOne(user)
}
// let getMessages = ({user}) => {
//     return new Promise((resolve, reject)=>{
//        let getMessages =  getAll({user})
//        resolve(getMessages)
//     })
// }
// let updateMessage = (id , message)=>{
//     return new Promise(async(resolve, reject)=>{
//         if(!id || !message){
//             reject("No hay id o message")
//             return false
//         }
//         const messageUpdated = await updateOne(id,message)
//         resolve(messageUpdated)
//     })
// }
module.exports = {
    addMessages,
    getMessages,
    updateMessage
}