// LIBRARIES
import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./router/routes.js";
// Database Library
import connectDB from "../server/database/connectDB.js";

// CREATING NEW EXPRESS APP
const app = express();
// SERVER DEV PORT
// ! REPLACE WITH || OF RENDER SERVER USING .Path
const PORT = 7777;

// MIDDLEWARE
app.use(express.json());
app.use(cors());

app.use(morgan("tiny"));
app.disable("x-powered-by");

// MONGO DB CONNECTION

// ROUTES

// SETTING UP API ROUTERS
app.use("/api", router);

// CONNECTS DATABASE WITH MONGODB (DEV: MONGODB-MEMORY-SERVER)
connectDB()
  .then(() => {
    try {
      // RUNS SERVER ON PORT
      app.listen(PORT, () => {
        console.log(`Server is running on port 7777!`);
      });
    } catch (error) {
      console.log("Cannot connect to server!");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection . . .");
  });
