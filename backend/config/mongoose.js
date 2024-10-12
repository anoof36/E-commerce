import mongoose from "mongoose";

/* SETTING UP MONGOOSE CONNECITON TO DB */
const dbConnect = () => {
  const url = process.env.MONGO_URL;
  console.log(url)
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected to monogoDb");
    })
    .catch(console.error());
};

export default dbConnect;
