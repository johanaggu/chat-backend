const { config } =require("./config")
// Import packages
const express = require("express")
const cors = require("cors")
const app = express()
const server = require("http").Server(app)


const socket = require("./socket")
const routes = require("./network/routes")
const connectMongo = require("./db")


//Middlewares
app.use(cors())
app.use(express.json())
app.use("/static", express.static("public"))
// app.use(express.urlencoded({extended:true}))
connectMongo()
//-Router
socket.connect(server)
routes(app) 

//Listen server
server.listen(config.port, ()=>{
    console.log(`http://localhost:${config.port}`);
})

