const express = require('express'); // importando express
const route = express.Router() // Quem que é o route?

route.get('/', (req, res) => res.render("index")) // req = requisição | res = resposta => res.render("index(ejs)") <- irá renderizar o ejs
// O '/' significa a página index(inicial)
// ex: route.get('/sobre', (req, res) => res.render("sobre")) rota para página sobre

module.exports = route // exportando a constante rout para o server.js