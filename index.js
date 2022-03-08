const express = require("express")
require("dotenv").config()
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}));

const connect  = require("./db/db")
connect()

const userRouter = require("./routes/userRouter")
app.use("/",userRouter)

app.get("/",(req,res)=>{
    res.send("hello")
})

const PORT  = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Node server running on ${PORT}`)
})