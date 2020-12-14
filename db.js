const mongoose = require("mongoose")
const { config } = require("./config")

let connect = async ()=>{
    await mongoose.connect(config.uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        poolSize:2
    })    
    console.log("[DB] conectada");
}

module.exports = connect