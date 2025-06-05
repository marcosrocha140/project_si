import { MongoClient } from "mongodb"

const url = "mongodb+srv://rmarcos140:egdjvgtd100@cluster0.nk9zxiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(url);

export const db = client.db("sportInterior");
// const teamCollection = await db.collection("teams").find().toArray();

// console.log(teamCollection);