const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const userSchema= new Schema({
    user: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("messages", userSchema)

module.exports = userModel