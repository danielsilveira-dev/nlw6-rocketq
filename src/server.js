const express = require('express');
const route = require('./routes')
const server = express()

server.set('view engine', 'ejs')
server.use(route)
server.listen(3000, () => console.log("RODANDO"))