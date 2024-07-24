const mongoose=require('mongoose');

//Mongoose is an Object Data Modeling (ODM) library for MongoDB, designed to simplify the interaction with the database from a Node.js application. It provides a straightforward API and additional features that make it easier to work with MongoDB.



const connectdb=(url)=>{
   return  mongoose
    .connect(url,{
        useNewUrlParser:true,
        useFindAndModify:false,
        useCreateIndex:true,
        useUnifiedTopology:true
    })
}


module.exports=connectdb;