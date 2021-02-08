const port = 3003;

const bodyParser = require("body-parser")
const server = require("express")();

/*
todas as requests que começam com /teste
irá ser aplicado o body parser
server.use("/teste",bodyParser.urlencoded({ extended: true }))
*/
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, _ => {
    console.log(`BACKEND Running on port ${port}`)
});

module.exports = server