const messagesRouter = require("../components/messages/network")
const usersRouter = require("../components/users/network")
const chatRouter = require("../components/chat/network")


const routes = (app)=>{
    app.use("/messages", messagesRouter)
    app.use("/users", usersRouter)
    app.use("/chat", chatRouter)

}

module.exports = routes