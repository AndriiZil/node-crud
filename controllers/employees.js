const Employee = require('../models/Employee');

// Create Employee to database;
module.exports.create = (req, res) => {
    const employee = new Employee(
        {
            name: req.body.name,
            imageSrc: req.file ? req.file.path : ''
        }
    );

    employee.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).json(employee);
        console.log(employee.id);
    })
};

// Get Employee by id
module.exports.getById = (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) return next(err);
        res.send(employee);
    })
};

// Updated Employee
module.exports.update = (req, res) => {
    Employee.findOneAndUpdate(req.params.id, {$set: req.body},
        (err, employee) => {
            if (err) return next(err);
            res.send('Employee updated')
        })
};

// Delete Employee
module.exports.delete = (req, res) => {
    Employee.findOneAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.send('Deleted Successfully!')
    })
};
