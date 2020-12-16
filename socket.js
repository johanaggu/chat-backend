const socketIo = require("socket.io")

const socket = {}

let connect =(server)=>{
    socket.io =  socketIo(server)
}

module.exports = {
    connect,
    socket
}   