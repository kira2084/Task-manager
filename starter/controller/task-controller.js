const Task=require('../models/Task');
const asyncWrapper=require('../middelware/asyncwrap');
const {createcustomerror}=require('../custom-error/errorclass');
const gettask=asyncWrapper(async(req,res)=>{
    const tasks=await Task.find();
    return res.status(200).json({tasks});
})
const createtask=asyncWrapper(async(req,res)=>{
    const task=await Task.create(req.body);//here instead of responsing we tell a task mongoose create these thing provided in taskschema like name and completed
    return res.status(200).json({task});
})
const getid=asyncWrapper(async(req,res)=>{
    const {id:taskID}=req.params
    const task=await Task.findOne({_id:taskID});
    if(!task){
        return next(createcustomerror(`task id ${task} not found`,404))
        //return res.status(404).json({msg:`task id ${task} not found`})
    }
    res.status(200).json({task}); 
})
const updatetask=asyncWrapper(async(req,res)=>{
    
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,//it used to return new one updated because in postman if we change it show previous one
            runValidators:true,//it is used to bring all cretieria like name mandatory required what we done in model task like name{ required:true,trim:true}this thing to validate
        })
        if(!task){
            return res.status(404).json({msg:`task id ${task} not found`})
        }
        res.status(200).json({task});
})
const deletetask=asyncWrapper(async(req,res)=>{
   const task= await Task.findOneAndDelete({_id:req.params.id});
    if(!task){
        return res.status(404).json({msg:`task id ${task} not found`})
    }
    return  res.status(200).json({task});
})

module.exports={
    gettask,
    createtask,
    getid,
    updatetask,
    deletetask
};