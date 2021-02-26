const express = require("express")
const app = express()

//Estou dizendo para o express usar o EJS como view enginne
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8001, ()=> {console.log("Hello world")})