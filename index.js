const express = require("express")
require("dotenv").config()
const app = express()
const bodyParser = require("body-parser")
const userRouter = require("./routes/userRouter")
const postRouter = require("./routes/postRoutes")

const cors = require("cors")
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}));

const connect  = require("./db/db")
connect()

app.use("/",userRouter)
app.use("/",postRouter)
app.get("/",(req,res)=>{
    res.send("hello")
})

const PORT  = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Node server running on ${PORT}`)
})