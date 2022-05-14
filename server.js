const http = require('http');

const app = require("./app")

const server = http.createServer(app);

server.listen(3000,()=>{
    console.log("Le serveur demare normalement à localhost")
})