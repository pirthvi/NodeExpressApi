const express=require('express');

const departmentContrller =require('../controllers/departmentController');
const router=express.Router();

router.get('/getAll',departmentContrller.getAll)
router.post('/create',departmentContrller.create);
router.get('/update',departmentContrller.update);
router.get('/delete/:id',departmentContrller.deletem);

module.exports=router;