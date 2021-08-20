const jwt = require('jsonwebtoken');
const User = require('../models/User');

function authentication(req, res, next){
    const {access_token} = req.headers;
    if(access_token){
        try{
            const token = jwt.verify(access_token, process.env.SECRETKEY);
            if(token){
               
            }
        }catch(error){
            res.status(400).json(error);
        }
    }
}

module.exports = authentication;