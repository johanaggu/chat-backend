const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const userSchema= new Schema({
    user: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel