const mongoose = require('mongoose')
const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true,
        unique :true
    },
    phone : {
        type : Number,
        required:true,
        unique :true
    },
    message : {
        type : String,
        required:true
    },
    date: {
        type: String,
        default: dt,
      },

})

module.exports=mongoose.model('Users', userSchema);

