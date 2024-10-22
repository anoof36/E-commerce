import mongoose from "mongoose";

/* SETTING UP MONGOOSE CONNECITON TO DB */
const dbConnect = () => {
  const url = process.env.MONGO_URL;
  
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected to vibe Data base");
    })
    .catch(console.error());
};

export default dbConnect;
