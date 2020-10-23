const express=require('express');
const employesController = require('../controllers/employesController');
const router=express.Router();

router.get('/getAll',employesController.getAll);
router.post('/create',employesController.create);
router.get('/deletem',employesController.deletem);
router.get('/update',employesController.update);

module.exports=router;