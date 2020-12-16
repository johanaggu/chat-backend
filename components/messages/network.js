const express = require("express")
const multer = require("multer")

const response = require("../../network/responses")
const { addMessages, getMessages, updateMessage } = require("./controller")

const upload = multer({
    dest: "./public/files",
})
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

router.post("/",upload.single("file"), ( req, res)=>{
    const { file } = req
    const {user, message, chat} = req.body;

    addMessages(user, message, chat, file)
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