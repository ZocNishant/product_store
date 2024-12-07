import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { connectdb } from "./config/db.js"
import Product from "./models/product.model.js"

const app = express()

app.post('/products', async (req, res)=>{
    const product = req.body  // user will send this data

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please Provide all the fields" })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({success:true, data: newProduct})
    }catch (error){
        console.log(error.message)
        res.status(500).json({success:false, message: "Server Error"})
        
    }
})

app.listen(3000, () => {
    connectdb()
    console.log("Sever Started in port 3000 ")
})

