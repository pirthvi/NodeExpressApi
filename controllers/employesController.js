const Employes=require('../models/employesModel');

const getAll=(req,res)=>{
    Employes.find().then((result)=>{
            res.send(result);
    }).catch((err)=>{
        console.log('Error Occourd');
    });
}

const create=(req,res)=>{
    employee= new Employes(req.body);
    employee.save().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log('error occoured in create')
    })
}

const update=(req,res)=>{
    employee= new Employes(req.body);
    employee.save().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log('error occoured in create')
    })
}
const deletem=(req,res)=>{
   const id=req.params.id;

   Employes.findByIdAndDelete(id).then((result)=>{
        res.send('Deleted Succesffully');
    }).catch((err)=>{
        console.log('error occoured in delete')
    })
}
module.exports={
    getAll,create,update,deletem
}