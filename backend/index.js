import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
const port=3000;

dotenv.config();

const app=express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Mongo Db connected");
    app.listen(3000,()=>{
        console.log(`Server is running on port :${port}`);
    })
})
.catch((err)=>{
    console.log("Monogo DB not connected "+err);
})