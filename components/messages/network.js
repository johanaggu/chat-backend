const express = require("express")
const { addMessages, getMessages } = require("./controller")

const response = require("../../network/responses")

const router = express.Router()

//Router
router.get("/",( req, res)=>{
    getMessages()
        .then(data =>{
            response.succes(req, res, "Lista de mensajes", 200, data)
        })
        .catch(err=>{
            response.error(req,res, "Error interno", 500, "error()")
        })
})

router.post("/", ( req, res)=>{
    const {user, message} = req.body;

    addMessages(user, message)
        .then(data => {
            response.succes(req, res, "Todo bien", 200, data)
        })
        .catch(err => {
            console.log(err);
            response.error(req, res, "error simulado", 400, err )
        })
        
})

module.exports = router