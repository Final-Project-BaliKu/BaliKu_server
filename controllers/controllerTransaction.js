const { ObjectId } = require('mongodb');
const Transaction = require('../models/transaction');
const User = require('../models/User');

class Controller {
    static allTransaction(req, res){
        Transaction.find()
        .then(data =>{
            res.status(200).json(data);
        })
        .catch(err =>{
            res.status(500).json(err);
        })
    }
    static postTransaction(req, res){
        const UserId = req.user._id;
        console.log(req.user, "MY REQ USER");
        const {date, price, duration} = req.body
        Transaction.insertOne({UserId, date, price, duration})
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(500).json(err);
        })
    }
    static deleteTransaction(req, res){
        const {id} = req.params
        Transaction.deleteOne({id})
        .then(data =>{
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports=Controller;