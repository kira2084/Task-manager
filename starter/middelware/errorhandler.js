

const errorhandler=(err,req,res,next)=>{
    return res.status(500).json({msg:err});
    //return res.status(500).json({msg:"something went wrong"}) //this one also can we writte then built error handler(err)
}

module.exports=errorhandler;