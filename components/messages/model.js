const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const messagesSchema= new Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
})

const messageModel = mongoose.model("messages", messagesSchema)

module.exports = messageModel