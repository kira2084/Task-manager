
const express=require('express');
const app=express();
const connectdb=require('./db/connect');
const task=require('./router/task-router')
const notfound=require('./middelware/not-found');
const errorhandler=require('./middelware/errorhandler');
require('dotenv').config();//The dotenv.config() function is commonly used in programming languages, particularly in the context of web development, to load environment variables from a .env file into the application's runtime environment.

app.use(express.json());
app.use(express.static('./public'));
//app.use(express.urlencoded({extended:false}))
app.use('/api/v1/tasks',task);
app.use(notfound);
app.use(errorhandler);

const Port =3000;//const port=process.env.PORT ||3000
const start=async()=>{
    try{
        //The process.env.API_KEY syntax is used to access the value of the environment variable named "API_KEY" within the process.env object.
        await connectdb(process.env.MONGO_URI);//don't use '-' and ';' in .env file like mongo-uri wasn't working and port=3000; was giving erroe for ';'
        app.listen(Port,(req,res)=>{
            console.log(`server started at ${Port}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();
  


 