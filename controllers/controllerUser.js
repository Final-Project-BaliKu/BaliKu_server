const { ObjectId } = require('mongodb');
const User = require('../models/User');

class Controller {
    static register(req, res){
        const {email, password} = req.body;
        User.insertOne({email, password})
        .then(data =>{
            res.status(201).json({_id: ObjectId(data.insertedId), email, password})
        })
        .catch(err =>{
            res.status(500).json(err.message);
        })
    }
}

module.exports=Controller;