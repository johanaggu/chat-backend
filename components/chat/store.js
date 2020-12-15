const chatModel = require("./model");

let create = async (chat)=>{

    const myChat = new chatModel({users:chat})
    
    return await myChat.save()
}
let find = (userId)=>{
    return new Promise((resolve, reject)=>{  
        chatModel.find({users: {$in: userId}})
             /* .populate(Este campo se llama como la FK de la otra collection) */           
            .populate("users")
            .exec((err, populated)=>{
                if(err){
                    reject(err)
                    return false
                }
    
                resolve(populated)
            })
    


    
    })
}

module.exports = {
    create, 
    find
}
