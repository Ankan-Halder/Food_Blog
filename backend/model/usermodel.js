const mongoose = require("mongoose");

//user schema making 

const userschema = new mongoose.Schema({
    foodname: {
        type: String,
        required : true,
    },
    price:{
        type: Number,
        required: true,
    },
    desc:{
        type:String,
        required:true,
    }    
});


//user model making 

const user = mongoose.model('user',userschema);

module.exports = user;