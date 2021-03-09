const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")
//DATABASE
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados")
    })
    .catch((msgError) => {
        console.log(msgError)
    })

//Estou dizendo para o express usar o EJS como view enginne
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {    
    Pergunta.findAll({raw: true}).then(perguntas => {        
        res.render("index", {
            perguntas: perguntas
        })
    })
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.listen(8001, ()=> {console.log("Hello world")})