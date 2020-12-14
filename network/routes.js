const express = require("express")
const messagesRouter = require("../components/messages/network")

const routes = (app)=>{
    app.use("/messages", messagesRouter)
}

module.exports = routes