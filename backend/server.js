import express from "express";
import "dotenv/config";
import dbConnect from "./config/mongoose.js";
import multer from "multer"

/* CEATING IMAGE STORAGE WITH MULTER LIBRARY */
const storage = multer.dickStorag({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); //setting the folder where images will be saved
  },
  filename: (req, file, cb)=> {
    cb(null, Date.now() + path.extname(file.originalname)) //  // Saving file with a unique name
  }
})

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
