import express from 'express'

import { Server } from 'socket.io'

const io = new Server()
const app = express()

const emailToSocketMapping = new Map();

io.on("connection", (socket) => {
    console.log("New connection");
    socket.on("join-room", (data) => {
        const { roomId, email } = data
        console.log("User", email, "Joined Room", roomId);
        emailToSocketMapping.set(email, socket.id)
        socket.join(roomId)
        socket.broadcast.to(roomId).emit("User-joined", { email })
    })
})

app.listen(8000, () => {
    console.log("Server is running");
})

io.listen(8001)
