const express = require("express")
const { router } = require("./routes/contactRouter")

const server = express()
server.use(express.json())

server.use("/api/v1", router)

const port = 3000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})