const mongoose = require("mongoose");

url = "mongodb+srv://admin:admin123@cluster0.sujquhh.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectdb = ()=>{
    console.log(`Connected to db`);
    return mongoose.connect(url);
};

module.exports = connectdb;