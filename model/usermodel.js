const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
})
module.exports = mongoose.model('login',userschema);