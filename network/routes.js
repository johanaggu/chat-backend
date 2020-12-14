const express = require("express")

const messagesRouter = require("../components/messages/network")
const usersRouter = require("../components/users/network")


const routes = (app)=>{
    app.use("/messages", messagesRouter)
    app.use("/users", usersRouter)
}

module.exports = routes