const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const chatSchema= new Schema({
    users:[{ 
        type: Schema.ObjectId,
        ref: "users"
    }]
    
})

const chatModel = mongoose.model("chat", chatSchema)

module.exports = chatModel

