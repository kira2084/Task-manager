const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    //The mongoose.schema is a core feature of the Mongoose library, which is an Object Data Modeling (ODM) library for Node.js and MongoDB. The mongoose.schema function is used to define the structure, data types, and validation rules for MongoDB documents.
    name:{
        type:String,
        required:true,//that giving message we [] or we can write :true
        trim:true,//it is used to remove space like "  john  " it makes "john"
        maxlength:[20,'length of name should below 20'],

    },
    completed:{
        type:Boolean,
        default:false,//means it always set's it value to 'false or true' for all creation
    },
    //if in post request if we gave invalid pair and key and value it will ignore like there is present name:vik,completed:true,age:26 where age is ignored and create the reset of schema
})

module.exports=mongoose.model('Task',TaskSchema);//pass first name and schema(structure of db)