const Department = require('../models/departmentModel');

const getAll = (req, res) => {
    Department.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log('Error Occourd');
    });
}

const create = (req, res) => {
    department = new Department(req.body);
    department.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log('error occoured in create')
    })
}

const update = (req, res) => {
    employee = new Department(req.body);
    employee.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log('error occoured in create')
    })
}
const deletem = (req, res) => {
    const id = req.params.id;

    Department.findByIdAndDelete(id).then((result) => {
        res.send('Deleted Succesffully');
    }).catch((err) => {
        console.log('error occoured in delete')
    })
}
module.exports = {
    getAll, create, update, deletem
}