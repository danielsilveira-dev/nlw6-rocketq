const express = require('express');
const route = require('./routes') // Importando o routes
const path = require('path') // Importando path que serve para informar diretórios

const server = express() // Executando o express

server.set('view engine', 'ejs') // set('view engine', 'ejs') view engine falando que o responsável é o ejs
server.set('views', path.join(__dirname, 'views')) // Informando que caminho está a pasta 'views' - o join junta o src/ com views/ 
server.use(route) // Usando o routes
server.listen(3000, () => console.log("RODANDO"))