import express from "express";
import "dotenv/config";
import dbConnect from "./config/mongoose.js";
import multer from "multer";

/* CEATING IMAGE STORAGE WITH MULTER LIBRARY */
const storage = multer.diskStorage({
  destination: "uploads/images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

/* C0NFIGURATOIN */
const app = express();

/* ROUTES */
app.get("/", (req, res) => {
  res.write("hello");
});

app.post("/upload", upload.single("productImage"), (req, res) => {
  res.json({ imageUrl: `/uploads/images/${req.file.filename}` });
});

/* SETTING UP MONGOOSE CONNECITON TO DB */
dbConnect();

/* SERVER PORT SETUP*/
const port = process.env.PORT || 6003;
app.listen(port, () => console.log("server is running on port " + port));
