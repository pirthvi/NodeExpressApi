const mangoose = require('mongoose');
const app=require('./config/App')
const dotenv = require('dotenv');
dotenv.config({
    path: './config/config.env'
});

const dbUri=process.env.dbUri
const port =process.env.PORT
mangoose.connect(dbUri,{useNewUrlParser: true,useUnifiedTopology:true})
.then((result)=>{
    app.listen(port);
    console.log('App Started on '+port);
}).catch((error)=>{
    console.log('error occoured');
});