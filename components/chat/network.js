const express = require("express")
const response = require("../../network/responses")
const { createChat, getChat } = require("./controller")

let router = express.Router()

router.post("/", (req, res)=>{
    createChat(req.body.users)
        .then(data=> {
            response.succes(req,res, "Creado correctamente", 200, data)
        })
        .catch(err=> {
            response.error(req,res, "Error interno", 500, err)
        }) 
});
    
router.get("/:userId", (req, res)=>{
    const { userId } = req.params
    getChat(userId)
        .then(data => {
            response.succes(req, res, "Listado correctamente", 200, data)
        })
        .catch(err => {
            response.error(req, res, "Error interno", 200, err)
        })
})

module.exports = router;
// ------------


