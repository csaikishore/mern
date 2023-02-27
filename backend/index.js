const express =require("express")
const cors = require("cors")
const {MongoClient}=require("mongodb")

app=express()
app.use(cors())
app.use(express.json());
 
const url="mongodb+srv://admin:admin@cluster0.qbeln0f.mongodb.net/?retryWrites=true&w=majority";
const client=new MongoClient(url)
const db = client.db("db1")
const col = db.collection("col1");

