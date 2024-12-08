import mongoose from "mongoose";

// We need to create model to create collection using mongoose.
// We need to create Schema to create a model. Ex. here we create product schema for products which have name, price, image and we create model or we can call it collection which is Product here. If we need to create user collection with name, age, gender then we need to create a user scheam having name, age, gender as object as below.

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
