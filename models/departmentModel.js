const mongoose = require('mongoose');
const { model } = require('./employesModel');

const departmentSchema=mongoose.Schema({
name:{
    type:String
},
address:{
    type:String
},
contactNumber:{
    type:String
},
directorName:{
    type:String
}
},{timestamps:true});
Department=mongoose.model('Department',departmentSchema);
module.exports=Department;
