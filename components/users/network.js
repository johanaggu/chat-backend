const express = require("express")
const response = require("../../network/responses")

const { addUser, getUser } = require("./controller")


const router = express.Router()

//Router

router.post("/", ( req, res)=>{
    const  user  = req.body;
    
    addUser(user)
        .then(data => {
            response.succes(req, res, "Todo bien", 200, data)
        })
        .catch(err => {
            console.log(err);
            response.error(req, res, "simulado", 400, err )
        })
        
});    

router.get("/", ( req, res)=>{
       
        getUser()
            .then(data =>{
                response.succes(req, res, "Todo bien", 200, data)
            })
            .catch(err => {
                console.log(err);
                response.error(req, res, "Error", 400, err )
            })
})

router.get("/:userId", ( req, res)=>{
        const { userId } = req.params
        getUser(userId)
            .then(data =>{
                response.succes(req, res, "Todo bien", 200, data)
            })
            .catch(err => {
                console.log(err);
                response.error(req, res, "Error", 400, err )
            })
})


module.exports = router