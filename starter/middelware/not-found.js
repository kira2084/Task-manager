const notfound=(req,res)=>{
    res.status(404).send('URL DOES NOT EXIST');
}
module.exports=notfound;