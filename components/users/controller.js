let { createOne, getAll }  = require("./store")

let addUser = (user)=>{
    return new Promise((resolve, reject)=>{
        let userCreated = createOne(user)
        if (!user) {
            return reject("No hay data")
        }
        resolve(userCreated)
    })    
}

let getUser = (userId)=>{
    return new Promise((resolve, reject)=>{
        let usersListed = getAll(userId)
        resolve(usersListed)
    })
}

module.exports = {
    addUser,
    getUser,
}