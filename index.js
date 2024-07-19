const express=require("express");
const mongoose=require("mongoose");
const jobRoutes=require("./route/job")
const app=express();
mongoose.connect("mongodb+srv://karanmehra17102003:USewdzRT8epmGavL@cluster0.b8fysc8.mongodb.net/")


app.use(express.json());
app.use(jobRoutes);
app.listen(10_000,()=>console.log('server is up and running at port 10000'));
