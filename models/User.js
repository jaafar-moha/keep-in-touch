const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : Number
    },
    message : {
        type : String
    }

},{timestamps : true})

module.exports=mongoose.model('Users', userSchema);

