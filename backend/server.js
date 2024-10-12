import express from "express";
import "dotenv/config";
import mongoose from "mongoose"
import dbConnect from "./config/mongoose";

/* C0NFIGURATOIN */
const app = express();

/* ROUTES */
app.get("/", (req, res) => {
  res.write("hello");
});

/* const uri = process.env.MONGO_URL; // Replace with your actual database name

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Connection error', err);
  }); */

  dbConnect()

/* SERVER PORT SETUP*/
console.log(process.env.PORT)
const port = process.env.PORT || 6003;
app.listen(port, () => console.log("server is running on port " + port));
