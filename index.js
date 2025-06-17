import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/blogPostRoute.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DATABASE CONNECTED");
    app.listen(PORT, () => {
      console.log("SERVER IS RUNNING ON PORT " + PORT);
    });
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use("/api", route);
