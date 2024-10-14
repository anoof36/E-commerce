import express from "express";
import "dotenv/config";
import dbConnect from "./config/mongoose.js";

/* C0NFIGURATOIN */
const app = express();

/* ROUTES */
app.get("/", (req, res) => {
  res.write("hello");
});

/* SETTING UP MONGOOSE CONNECITON TO DB */
  dbConnect()

/* SERVER PORT SETUP*/
const port = process.env.PORT || 6003;
app.listen(port, () => console.log("server is running on port " + port));
