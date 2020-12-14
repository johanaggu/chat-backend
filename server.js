// Import packages
const express = require("express")
const { config } =require("./config")
const routes = require("./network/routes")

// Use packages
const app = express()

//Middlewares
app.use(express.json())
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended:true}))

//-Router
routes(app) 

//Listen server
app.listen(config.port, ()=>{
    console.log(`http://localhost:${config.port}`);
})

