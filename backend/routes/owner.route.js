const express = require('express');
const app = express();
const ownerRoute = express.Router();

// ..  Owner Model
let Owner = require('../models/Owner');


// Adding 
ownerRoute.route('/create').post((req, res, next) => {
    Owner.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
// getting all list
ownerRoute.route('/').get((req, res) => {
    Owner.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single owner
ownerRoute.route('/read/:id').get((req, res) => {
    Owner.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Owner
ownerRoute.route('/update/:id').put((req, res, next) => {
    Owner.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// Delete Owner
ownerRoute.route('/delete/:id').delete((req, res, next) => {
    Owner.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = ownerRoute;
