import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Get all products

router.get("/", getProducts);

// Create a prouct

router.post("/", createProduct);

// Update a Product

router.put("/:id", updateProduct);

// Delete a product

router.delete("/:id", deleteProduct);

export default router;
