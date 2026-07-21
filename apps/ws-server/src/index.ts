import { prisma } from "@repo/db"
import { WebSocketServer } from "ws"

const wss = new WebSocketServer({
    port: 8000
})


wss.on("connection", async (socket) => {
    const user = await prisma.user.findFirst();
    console.log("Socket server started")
    socket.send(`hello dumass: ${user?.username}`)
})