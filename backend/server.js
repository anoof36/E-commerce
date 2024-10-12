import express from "express";
import "dotenv/config";

/* C0NFIGURATOIN */
const app = express();

/* ROUTES */
app.get("/", (req, res) => {
  res.write("hello");
});

/* SERVER PORT SETUP*/
const port = process.env.PORT || 6001;
app.listen(port, () => console.log("server is running on port " + port));
