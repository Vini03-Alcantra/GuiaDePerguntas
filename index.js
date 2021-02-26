const express = require("express")
const app = express()

//Estou dizendo para o express usar o EJS como view enginne
app.set('view engine', 'ejs')

app.get("/:nome/:lang", (req, res) => {    
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false
    res.render("index", {
        nome: nome,
        lang: lang,
        enterprise: "My house",
        habilitys: "4",
        msg: exibirMsg
    })
})

app.listen(8001, ()=> {console.log("Hello world")})