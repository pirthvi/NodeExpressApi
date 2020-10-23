const { timeStamp } = require("console");
const { Mongoose } = require("mongoose");

const mongoose=require('mongoose');

const employesSchema= mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    mobileNo:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    password:{
        type:String
    },
    department:{
           type:String
    }
},{timestamps:true});
const Employes=mongoose.model('Employes',employesSchema);
module.exports=Employes;
