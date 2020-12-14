const express = require("express")
const { addMessages, getMessages, updateMessage } = require("./controller")

const response = require("../../network/responses")

const router = express.Router()

//Router
router.get("/",( req, res)=>{
    const { user } = req.query
    getMessages({user})
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

router.patch("/:id",(req, res)=>{
    const { id } = req.params
    const { message } = req.body.message
    
    updateMessage(id,message)
        .then(data=>{
            response.succes(req,res,"Mensage actualizado", 200, data)
        })
        .catch(err => {
            console.log(err);
            response.error(req,res,"No se pudo actualizar", 500, "no se encontro el mensage")
        })
})

module.exports = router