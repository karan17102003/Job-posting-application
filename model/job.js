const mongoose=require("mongoose");

const jobSchema=new mongoose.Schema({
    title:{
        type:String,
       
        
    },
    description:{
        type:String,
        
    },
    company:{
        type:String,
        
    },
    location:{
        type:String,
        
    },
    salary:{
        type:Number,
       
    },
});
const JobSchema=mongoose.model("jobs",jobSchema)
module.exports=JobSchema;

