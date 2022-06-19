import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
const app = express();

app.use(express.json());
app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://admin:Admin1234@cluster0.mcbpb.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log(`Connected to the Database and Listening to localhost 5000`)
  )
  .catch((err) => console.log(err));
