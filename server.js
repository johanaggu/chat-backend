// Import packages
const express = require("express")
const response = require("./network/responses")

const { config } =require("./config")

// Use packages
const app = express()
const router = express.Router()

//Middlewares
app.use(express.json())
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended:true}))

app.use("/api", router)
 
//Router
router.get("/message",( req, res)=>{
    if (req.query.error === "ok") {
        response.error(req, res, "error simulado", 400,"Es solo una")
    }  else {

        response.succes(req, res, "Todo bien", 200)
    }
    
})
router.post("/message",( req, res)=>{
    if (req.query.error === "ok") {
        response.error(req, res, "error simulado", 400,"Es solo una")
    } else {

        response.succes(req, res, "Todo bien", 200)
    }
    
})


app.listen(config.port, ()=>{
    console.log(`http://localhost:${config.port}`);
})

