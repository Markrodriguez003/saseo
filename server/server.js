// LIBRARIES
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./router/routes.js";
// Database Library
import connectDB from "../server/database/connectDB.js";

// CRENDENTIALS
// console.log(process.env.MONG0DB_APP_USERNAME)
// console.log(process.env.MONG0DB_APP_PASSWORD)

// CREATING NEW EXPRESS APP
const app = express();
const PORT = 7777;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

// MONGO DB CONNECTION

// ROUTES
app.get("/message", (req, res) => {
  res.status(201).json({ message: "Hello from server!" });
});

// API ROUTERS
app.use("/api", router);

connectDB()
  .then(() => {
    try {
      // RUNS SERVER
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

/* // ? MONGO DB CONNECTION .. // 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<db_username>:<db_password>@saseodb.rvs2m.mongodb.net/?retryWrites=true&w=majority&appName=SaseoDB";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


*/
