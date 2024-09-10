import mongoose, { get } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connectDB() {
  const mongodb = await MongoMemoryServer.create();
  const getUri = mongodb.getUri();
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(getUri);
  console.log("Database Connected!");

  return db;
}

export default connectDB;
