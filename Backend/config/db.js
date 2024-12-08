import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    const connectToDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connectToDb.connection.host}`);
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1); // process code 1 means failure but 0 means success.
  }
};
