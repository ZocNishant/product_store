import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { connectdb } from "./config/db.js"

const app = express()

app.get('/products', (req, res)=>{
    
})

app.listen(3000, () => {
    connectdb()
    console.log("Sever Started in port 3000 ")
})

