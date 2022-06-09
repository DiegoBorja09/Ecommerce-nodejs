const express = require("express")
const morgan= require("morgan")
const cors = require("cors")
const { port } = require("./config")


//Importando routes



connection()


const app = express()


//utilizando middleware

app.use(morgan("dev"))

//Middleware de JSON
app.use(cors({
    origin:["http://localhost:3000"]
}))

app.use(express.json())

//Usando routes





app.listen(port,()=>{
    console.log("Listening: http://localhost:"+port)
})