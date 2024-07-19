const express=require("express");
const mongoose=require("mongoose");
const jobRoutes=require("./route/job")
const app=express();
mongoose.connect("mongodb://localhost:27017/job_app")
.then(()=> console.log("db connected"))
.catch(()=> console.log("error",err))
app.use(express.json());
app.use(jobRoutes);
app.listen(10_000,()=>console.log('server is up and running at port 10000'));
