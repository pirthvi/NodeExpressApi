const AppError=require('../utils/response')
const dotenv=require('dotenv');
const jwt=require('jsonwebtoken')
const Employes=require('../models/employesModel')
const {
    promisify
} = require('util');
dotenv.config({
    path:'../config/config.env'
})
exports.protect = async (req, res, next) => {

    try {
        // 1) check if the token is there
        let token;
        
        if (req.headers.authorization) {
            token = req.headers.authorization;

            console.log(token);
        }
        if (!token) {
           res.send('Token not found');
        }


        // 2) Verify token 
       const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

         // 3) check if the user is exist (not deleted)
        const employee = await Employes.findById(decode.id);
        console.log(employee);

     //   req.user = user;
        next();

    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;

        // 1) check if email and password exist
        if (!email || !password) {
            return next(new AppError(404, 'fail', 'Please provide email or password'), req, res, next);
        }

        // 2) check if user exist and password is correct
        
       
        const employee=await Employes.findOne({
            email
        }).select('+password');
    

        // 3) All correct, send jwt to client
      
        var token='';
        if (!employee) {
            res.send('Invalid Email Or Password');
        }
        else{
            employee.password=undefined
             token = createToken(employee._id);
        }
        
        res.status(200).json({
            status: 'success',
            token,
            data: {
                employee
            }
        });
        
        

    } catch (err) {
        next(err);
    }
};

const createToken = id => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

exports.createUser=(req,res,next)=>{
    const employee =Employes.create({
        name:req.body.name,
        address:req.body.address,
        mobileNo:req.body.mobileNo,
        age:req.body.age,
        password:req.body.password,
        email:req.body.email,
        department:req.body.department

    })
    const token=createToken(employee._id);
    res.status(201).json({
        status: 'success',
        token,
        message:'Employee Added Successfully'
    });
}