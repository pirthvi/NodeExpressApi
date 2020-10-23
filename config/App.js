const express = require('express')
const mangoose = require('mongoose');
const app=express();
const cors = require('cors')
const { json } = require('body-parser')
const employesRoutes=require('../routes/employesRouter');
const departmentRoutes=require('../routes/departmentRoute');
const authController=require('../security/authController')
const logs = require('../logs/log')


app.use(logs.requestLogs)
app.use(cors());
app.use(json());
app.use(express.urlencoded({extended:true}))
app.use('/signUp',authController.createUser)
app.use('/login',authController.login)
app.use(authController.protect)
app.use('/employes',employesRoutes)
app.use('/department',departmentRoutes)


module.exports=app