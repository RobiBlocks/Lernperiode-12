import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const options = process.env.NODE_ENV === 'production' ? {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
} : {};

const client = new MongoClient(uri, options);

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Connected to MongoDB successfully.");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

let db = client.db("private-collection");

export default db;
