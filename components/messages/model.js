const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const messagesSchema= new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    message: {
        type: String, 
        required: true 
    },
    chat:{
        type: Schema.Types.ObjectId,
        ref:"chats",
        required:true
    },
    date:{
        type: Date,
        required: true
    }
})

const messageModel = mongoose.model("messages", messagesSchema)

module.exports = messageModel