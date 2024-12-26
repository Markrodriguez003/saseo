// LIBRARIES
import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import router from "./router/routes.js";
// Database Library
import connectDB from "../server/database/connectDB.js";

// CREATING NEW EXPRESS APP
const app = express();
// SERVER DEV PORT
// ! REPLACE WITH || OF RENDER SERVER USING .Path
const PORT = 7777;

const corsOptions = {
  origin: "http://localhost:3000", // Change to your frontend's URL

  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  // credentials: "include", // Allow credentials (cookies, authorization headers, etc.)
  // methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
};

// MORGAN OPTIONS
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});
// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
// app.use(morgan("tiny"));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :body  - :response-time ms"
  )
);
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
