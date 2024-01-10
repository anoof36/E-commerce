import express from "express"
import "dotenv/config"
import authRoutes from "./routes/auth.js"

/* C0NFIGURATOIN */
const app = express()


/* ROUTES */
app.get("/", (req,res) => {
    res.write("hello")
})

/* SERVER PORT SETUP*/
const port = process.env.PORT
app.listen(port, () => console.log("server is running on port " + port))