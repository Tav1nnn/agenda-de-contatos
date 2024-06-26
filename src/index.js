const express = require("express");
const { router: contact } = require("./routes/contactRouter");
const {router: user} = require("./routes/userRouter");

const server = express();
server.use(express.json());

server.use(user);
server.use(contact);

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})