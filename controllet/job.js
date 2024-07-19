const jobModel=require("../model/job")

const createJob=async(req,res)=>{
    try{
        console.log(req.body);
    const newlyInsertedJob=await jobModel.create(req.body)
    console.log(newlyInsertedJob);

    res.json({
        success:true,
        message:"create job api"

    });

    }catch(err){
        
        res.json({
            success:false,
            message:"somerhing went wrong"
        });
        
    }
    
};
const listJob=async(req,res)=>{
    const jobsList=await jobModel.find();
    res.json({
        success:true,
        message:"list job api",
        results:jobsList,

    });
};
const updateJob=async(req,res)=>{
    const updateObj={
        $set:{
            salary:100000,
        }

    };
    
    const response= await jobModel.findByIdAndUpdate(req.params.id,updateObj)
    
    console.log(response);
    res.json({
        success:true,
        message:"update job api"

    });
};

const deleteJob=async(req,res)=>{
    await jobModel.findByIdAndDelete(req.params.id)
    res.json({
        success:true,
        message:"delete job api"

    });
};

const jobController={
    createJob,
    listJob,
    updateJob,
    deleteJob
}

module.exports=jobController;