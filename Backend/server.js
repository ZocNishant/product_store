import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./config/db.js";
import productRoutes from "../routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in req.body -> middleware

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  connectdb();
  console.log("Sever Started in port 3000");
});
