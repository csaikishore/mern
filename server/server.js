// const express = require('express');
// const cors = require('cors');
// const {MongoClient} = require('mongodb');

// const app = express();
// app.use(cors())
// app.use(express.json())

// const uri = "mongodb+srv://admin:admin@cluster0.dr8fhmz.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// const db = client.db("db1");
// const col = db.collection("col1");

// app.post('/',(req,res) => {
//     console.log(req.body);
//     col.insertOne(req.body);
//     res.send("Insert Successful");
// })

// app.get('/products',async (req,res) => {
//     const result = await col.find().toArray();
//     console.log(result);
//     res.send(result);
// })

// app.delete('/delete/:id',async (req,res) => {
//     const id = req.params.id;
//     const result = await col.deleteOne({id : id});
//     console.log(result);
//     res.send(result);
// })

// // app.get('/',(req,res)=>{
// //     console.log('This is Get Request')
// // })

// app.listen(8888);
// console.log("Server started");
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://admin:admin@cluster0.qbeln0f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db = client.db("db1");
const col = db.collection("col1");

app.post("/", (req, res) => {
  console.log(req.body);
  col.insertOne(req.body);
  res.send("Insert Successful");
});

app.get("/products", async (req, res) => {
  const result = await col.find().toArray();
  console.log(result);
  res.send(result);
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const result = await col.deleteOne({ pid: id });
  console.log(result);
  res.send(result);
});

// app.get('/',(req,res)=>{
//     console.log('This is Get Request')
// })

app.listen(8888);
console.log("Server started");
